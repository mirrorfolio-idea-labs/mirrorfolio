import { NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/db";
import { sendEmail } from "@/lib/email";
import { getWelcomeEmail } from "@/lib/emailTemplates";

export async function POST(req: Request) {
  try {
    const bodyText = await req.text();
    const signature = req.headers.get("x-razorpay-signature");

    if (!signature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 400 });
    }

    const expectedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_WEBHOOK_SECRET || process.env.RAZORPAY_KEY_SECRET!)
      .update(bodyText)
      .digest("hex");

    if (expectedSignature !== signature) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    const body = JSON.parse(bodyText);

    // Handle payment.captured or order.paid
    if (body.event === "payment.captured" || body.event === "order.paid") {
      const paymentData = body.payload.payment.entity;
      const orderId = paymentData.order_id;
      const paymentId = paymentData.id;

      const payment = await prisma.payment.findUnique({
        where: { razorpayOrderId: orderId },
        include: { preBooking: { include: { user: true } } },
      });

      if (payment && payment.status !== "SUCCESS") {
        await prisma.payment.update({
          where: { id: payment.id },
          data: {
            status: "SUCCESS",
            razorpayPaymentId: paymentId,
            razorpaySignature: signature,
          },
        });

        await prisma.preBooking.update({
          where: { id: payment.preBookingId },
          data: { status: "CONFIRMED" },
        });

        // Trigger Welcome/Confirmation Email
        await sendEmail({
          to: payment.preBooking.user.email,
          subject: "Your Spot is Confirmed! (Mirrorfolio)",
          type: "WELCOME",
          html: getWelcomeEmail({ 
            name: payment.preBooking.user.name || "", 
            city: payment.preBooking.city 
          }),
        });
      }
    }

    return NextResponse.json({ status: "ok" });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook handling failed" }, { status: 500 });
  }
}
