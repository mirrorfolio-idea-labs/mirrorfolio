import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import {
  saveContactSubmission,
  initializeDatabase,
  checkEmailRateLimit,
  checkIpRateLimit,
} from "@/lib/db";
import {
  sendEmail,
  getTeamNotificationEmail,
  getUserConfirmationEmail,
} from "@/lib/email";
import {
  sanitizeString,
  sanitizeEmail,
  sanitizePhone,
  sanitizeMessage,
  containsSqlInjection,
  checkRateLimit,
  getClientIp,
  isValidContentType,
  isLikelyBot,
} from "@/lib/security";

// Phone validation regex that accepts:
// - 10 digits starting with 6-9 (e.g., 9876543210)
// - 11 digits starting with 0 (e.g., 09876543210)
// - +91 followed by 10 digits (e.g., +919876543210 or +91 9876543210)
// - + followed by country code and number
const phoneRegex =
  /^(?:\+91[\s-]?[6-9]\d{9}|\+[1-9]\d{6,14}|0[6-9]\d{9}|[6-9]\d{9})$/;

const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  email: z.string().email("Please enter a valid email address"),
  phone: z
    .string()
    .regex(phoneRegex, "Please enter a valid phone number")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Please tell us a bit more — at least 10 characters")
    .max(2000, "Message is too long"),
});

// Initialize database on first request
let dbInitialized = false;

export async function POST(request: NextRequest) {
  try {
    const headers = request.headers;
    const clientIp = getClientIp(headers);
    const userAgent = headers.get("user-agent") || "";

    // Security Check 1: Validate content type
    if (!isValidContentType(headers)) {
      return NextResponse.json(
        { error: "Invalid content type" },
        { status: 415 }
      );
    }

    // Security Check 2: Block obvious bots
    if (isLikelyBot(headers)) {
      return NextResponse.json(
        { error: "Automated requests are not allowed" },
        { status: 403 }
      );
    }

    // Security Check 3: IP-based rate limiting (in-memory)
    const ipRateLimit = checkRateLimit(clientIp, 10, 60000); // 10 requests per minute
    if (!ipRateLimit.allowed) {
      return NextResponse.json(
        {
          error: "Too many requests. Please try again later.",
          retryAfter: Math.ceil(ipRateLimit.resetIn / 1000),
        },
        {
          status: 429,
          headers: {
            "Retry-After": Math.ceil(ipRateLimit.resetIn / 1000).toString(),
          },
        }
      );
    }

    // Initialize database if not already done
    if (!dbInitialized) {
      try {
        await initializeDatabase();
        dbInitialized = true;
      } catch (dbError) {
        console.error("Database initialization error:", dbError);
        // Continue without database if not configured
      }
    }

    // Parse and validate request body
    let body;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 }
      );
    }

    // Validate the request body with Zod
    const validatedData = contactFormSchema.parse(body);

    // Security Check 4: Sanitize all inputs
    const sanitizedData = {
      name: sanitizeString(validatedData.name),
      email: sanitizeEmail(validatedData.email),
      phone: validatedData.phone ? sanitizePhone(validatedData.phone) : "",
      message: sanitizeMessage(validatedData.message),
    };

    // Security Check 5: Check for SQL injection patterns (defense in depth)
    const allInputs = Object.values(sanitizedData).join(" ");
    if (containsSqlInjection(allInputs)) {
      console.warn("Potential SQL injection attempt blocked:", {
        ip: clientIp,
        userAgent,
      });
      return NextResponse.json(
        { error: "Invalid input detected" },
        { status: 400 }
      );
    }

    // Security Check 6: Database-level rate limiting (persistent)
    if (dbInitialized) {
      const [emailLimited, ipLimited] = await Promise.all([
        checkEmailRateLimit(sanitizedData.email, 3, 60), // 3 per hour per email
        checkIpRateLimit(clientIp, 10, 60), // 10 per hour per IP
      ]);

      if (emailLimited) {
        return NextResponse.json(
          {
            error:
              "You've already submitted recently. Please wait before trying again.",
          },
          { status: 429 }
        );
      }

      if (ipLimited) {
        return NextResponse.json(
          {
            error:
              "Too many submissions from your location. Please try again later.",
          },
          { status: 429 }
        );
      }
    }

    let submissionId: number = 0;
    let createdAt: string = new Date().toISOString();

    // Save to database
    if (dbInitialized) {
      try {
        const result = await saveContactSubmission({
          name: sanitizedData.name,
          email: sanitizedData.email,
          phone: sanitizedData.phone || undefined,
          message: sanitizedData.message,
          ipAddress: clientIp,
          userAgent: userAgent.substring(0, 500), // Limit user agent length
        });
        submissionId = result.id;
        createdAt = result.createdAt;
        console.log("Contact saved to database:", submissionId);
      } catch (dbError) {
        console.error("Failed to save to database:", dbError);
        // Continue without database - still send emails
      }
    }

    // Send notification email to team
    try {
      const teamEmailResult = await sendEmail(
        getTeamNotificationEmail({
          name: sanitizedData.name,
          email: sanitizedData.email,
          phone: sanitizedData.phone || undefined,
          message: sanitizedData.message,
          submissionId,
          createdAt,
          ipAddress: clientIp,
        })
      );
      if (teamEmailResult.success) {
        console.log("Team notification email sent:", teamEmailResult.messageId);
      } else {
        console.error("Team notification failed:", teamEmailResult.error);
      }
    } catch (emailError) {
      console.error("Failed to send team notification:", emailError);
    }

    // Send confirmation email to user
    try {
      const userEmailResult = await sendEmail(
        getUserConfirmationEmail({
          name: sanitizedData.name,
          email: sanitizedData.email,
        })
      );
      if (userEmailResult.success) {
        console.log("User confirmation email sent:", userEmailResult.messageId);
      } else {
        console.error("User confirmation failed:", userEmailResult.error);
      }
    } catch (emailError) {
      console.error("Failed to send user confirmation:", emailError);
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Your message has been received. We'll get back to you within 48 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.errors },
        { status: 400 }
      );
    }

    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}

// Reject other methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
