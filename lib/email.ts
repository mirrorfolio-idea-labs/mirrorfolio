import nodemailer from "nodemailer";
import { escapeHtml } from "./security";

// Create reusable transporter with connection pooling
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
  // Production settings
  pool: true,
  maxConnections: 5,
  maxMessages: 100,
  rateDelta: 1000,
  rateLimit: 10,
});

// Verify transporter configuration
transporter.verify((error) => {
  if (error) {
    console.error("SMTP configuration error:", error);
  } else {
    console.log("SMTP server is ready");
  }
});

/**
 * Sanitize name for email header (prevent header injection)
 */
function sanitizeForHeader(str: string): string {
  return str.replace(/[\r\n\t]/g, "").substring(0, 100);
}

/**
 * Get the base email template with shared styling
 * Uses inline styles for maximum email client compatibility
 * Uses text-based logo for reliability across all email clients
 */
function getEmailTemplate(content: string, footerContent: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Mirrorfolio</title>
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
</head>
<body style="margin: 0; padding: 0; background-color: #fbfaf8; font-family: Georgia, 'Times New Roman', serif;">
  <!-- Wrapper Table -->
  <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #fbfaf8;">
    <tr>
      <td align="center" style="padding: 40px 20px;">
        <!-- Main Container -->
        <table role="presentation" cellpadding="0" cellspacing="0" width="600" style="max-width: 600px; width: 100%;">
          
          <!-- Header with Text Logo -->
          <tr>
            <td style="padding: 0 0 32px 0;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="background-color: #3d3530; border-radius: 8px; padding: 24px 28px;">
                    <span style="font-family: Georgia, 'Times New Roman', serif; font-size: 22px; color: #fbfaf8; font-weight: normal; letter-spacing: -0.5px;">Mirrorfolio</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Content Card -->
          <tr>
            <td>
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #ffffff; border: 1px solid #e8e4df; border-radius: 8px;">
                <tr>
                  <td style="padding: 40px 32px;">
                    ${content}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="padding: 32px 0 0 0;">
              <table role="presentation" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="border-top: 1px solid #e8e4df; padding-top: 24px;">
                    ${footerContent}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

/**
 * Team notification email template
 */
export function getTeamNotificationEmail(data: {
  name: string;
  email: string;
  phone?: string;
  message: string;
  submissionId: number;
  createdAt: string;
  ipAddress?: string;
}) {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safePhone = data.phone ? escapeHtml(data.phone) : null;
  const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br>");

  const content = `
    <!-- Title -->
    <h1 style="font-family: Georgia, 'Times New Roman', serif; font-size: 24px; font-weight: normal; color: #3d3530; margin: 0 0 24px 0;">
      New contact submission
    </h1>
    
    <!-- Intro -->
    <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 16px; line-height: 1.6; color: #5c5550; margin: 0 0 24px 0;">
      Someone has reached out through the contact form.
    </p>
    
    <!-- From Box -->
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f5f3f0; border-left: 3px solid #a06b5c; margin-bottom: 20px;">
      <tr>
        <td style="padding: 20px 24px;">
          <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #a06b5c; margin: 0 0 8px 0;">
            From
          </p>
          <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 16px; color: #3d3530; margin: 0; font-weight: 600;">
            ${safeName}
          </p>
          <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; color: #5c5550; margin: 4px 0 0 0;">
            ${safeEmail}
          </p>
          ${
            safePhone
              ? `<p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; color: #5c5550; margin: 4px 0 0 0;">${safePhone}</p>`
              : ""
          }
        </td>
      </tr>
    </table>
    
    <!-- Message Box -->
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f5f3f0; border-left: 3px solid #a06b5c; margin-bottom: 24px;">
      <tr>
        <td style="padding: 20px 24px;">
          <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color: #a06b5c; margin: 0 0 8px 0;">
            Message
          </p>
          <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; line-height: 1.7; color: #3d3530; margin: 0;">
            ${safeMessage}
          </p>
        </td>
      </tr>
    </table>
    
    <!-- Metadata -->
    <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; color: #8a857f; margin: 0;">
      Submission ID: ${data.submissionId}<br>
      Received: ${new Date(data.createdAt).toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "long",
        timeStyle: "short",
      })}${data.ipAddress ? `<br>IP: ${escapeHtml(data.ipAddress)}` : ""}
    </p>
  `;

  const footer = `
    <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; color: #8a857f; margin: 0;">
      Reply directly to this email to respond to ${safeName}.
    </p>
  `;

  return {
    from: `"Mirrorfolio" <${process.env.SMTP_FROM || process.env.SMTP_USER}>`,
    to: "kabeer@mirrorfolio.com",
    replyTo: data.email,
    subject: `Contact: ${sanitizeForHeader(data.name)}`,
    html: getEmailTemplate(content, footer),
    text: `New contact submission from ${data.name} (${data.email}):\n\n${data.message}\n\nSubmission ID: ${data.submissionId}\nReceived: ${data.createdAt}`,
  };
}

/**
 * User confirmation email template - Personal email from the founder
 */
export function getUserConfirmationEmail(data: {
  name: string;
  email: string;
}) {
  const firstName = escapeHtml(data.name.split(" ")[0]);

  const content = `
    <!-- Greeting -->
    <p style="font-family: Georgia, 'Times New Roman', serif; font-size: 18px; color: #3d3530; margin: 0 0 20px 0;">
      Hi ${firstName},
    </p>
    
    <!-- Main Message -->
    <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 16px; line-height: 1.7; color: #5c5550; margin: 0 0 16px 0;">
      Thank you for reaching out. I've received your message personally 
      and will get back to you within 48 hours — usually sooner.
    </p>
    
    <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 16px; line-height: 1.7; color: #5c5550; margin: 0 0 24px 0;">
      I read every message myself because understanding what families are 
      going through is how we make sure Mirrorfolio stays useful and 
      doesn't drift into something it shouldn't be.
    </p>
    
    <!-- Divider -->
    <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin: 24px 0;">
      <tr><td style="border-top: 1px solid #e8e4df;"></td></tr>
    </table>
    
    <!-- Helpful Links -->
    <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14px; color: #8a857f; margin: 0 0 16px 0;">
      In the meantime, you might find these helpful:
    </p>
    
    <table role="presentation" cellpadding="0" cellspacing="0">
      <tr>
        <td style="padding: 8px 0;">
          <a href="https://mirrorfolio.com/how-it-works" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; color: #a06b5c; text-decoration: none;">
            How it works →
          </a>
        </td>
      </tr>
      <tr>
        <td style="padding: 8px 0;">
          <a href="https://mirrorfolio.com/ethics" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; color: #a06b5c; text-decoration: none;">
            Ethics &amp; boundaries →
          </a>
        </td>
      </tr>
      <tr>
        <td style="padding: 8px 0;">
          <a href="https://mirrorfolio.com/pilot" style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; color: #a06b5c; text-decoration: none;">
            About the pilot →
          </a>
        </td>
      </tr>
    </table>
    
    <!-- Reply Note -->
    <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 15px; line-height: 1.6; color: #5c5550; margin: 32px 0 24px 0;">
      If you have any urgent questions, just reply to this email.
    </p>
    
    <!-- Signature -->
    <table role="presentation" cellpadding="0" cellspacing="0">
      <tr>
        <td>
          <p style="font-family: Georgia, 'Times New Roman', serif; font-size: 16px; color: #3d3530; margin: 0;">
            — Kabeer
          </p>
          <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; color: #8a857f; margin: 4px 0 0 0;">
            Founder, Mirrorfolio
          </p>
        </td>
      </tr>
    </table>
  `;

  const footer = `
    <p style="font-family: Georgia, 'Times New Roman', serif; font-size: 14px; color: #8a857f; margin: 0 0 12px 0;">
      Mirrorfolio — Early visibility for caregivers, without surveillance.
    </p>
    <p style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 13px; margin: 0;">
      <a href="https://mirrorfolio.com/privacy" style="color: #a06b5c; text-decoration: none;">Privacy</a>
      <span style="color: #e8e4df; margin: 0 8px;">·</span>
      <a href="https://mirrorfolio.com/ethics" style="color: #a06b5c; text-decoration: none;">Ethics</a>
      <span style="color: #e8e4df; margin: 0 8px;">·</span>
      <a href="https://mirrorfolio.com/founder" style="color: #a06b5c; text-decoration: none;">Founder</a>
    </p>
  `;

  return {
    from: `"Kabeer from Mirrorfolio" <${
      process.env.SMTP_FROM || process.env.SMTP_USER
    }>`,
    to: data.email,
    replyTo:
      process.env.SMTP_FROM ||
      process.env.SMTP_USER ||
      "kabeer@mirrorfolio.com",
    subject: "Thanks for reaching out — Kabeer from Mirrorfolio",
    html: getEmailTemplate(content, footer),
    text: `Hi ${
      data.name.split(" ")[0]
    },\n\nThank you for reaching out. I've received your message personally and will get back to you within 48 hours — usually sooner.\n\nI read every message myself because understanding what families are going through is how we make sure Mirrorfolio stays useful and doesn't drift into something it shouldn't be.\n\nIn the meantime, you might find these helpful:\n- How it works: https://mirrorfolio.com/how-it-works\n- Ethics & boundaries: https://mirrorfolio.com/ethics\n- About the pilot: https://mirrorfolio.com/pilot\n\nIf you have any urgent questions, just reply to this email.\n\n— Kabeer\nFounder, Mirrorfolio`,
  };
}

/**
 * Send email with error handling and retry logic
 */
export async function sendEmail(
  mailOptions: ReturnType<typeof getTeamNotificationEmail>,
  retries: number = 2
): Promise<{ success: boolean; messageId?: string; error?: string }> {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("Email sent:", info.messageId);
      return { success: true, messageId: info.messageId };
    } catch (error) {
      console.error(`Email send attempt ${attempt + 1} failed:`, error);

      if (attempt === retries) {
        return {
          success: false,
          error: error instanceof Error ? error.message : "Unknown error",
        };
      }

      // Wait before retry (exponential backoff)
      await new Promise((resolve) => setTimeout(resolve, 1000 * (attempt + 1)));
    }
  }

  return { success: false, error: "Max retries exceeded" };
}

export { transporter };
