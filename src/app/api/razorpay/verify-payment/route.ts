import { NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/db";
import { sendEmail } from "@/lib/email";
import { getWelcomeEmail } from "@/lib/emailTemplates";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = body;

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET!)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return NextResponse.json({ success: false, error: "Invalid signature" }, { status: 400 });
    }

    // Update the payment
    const payment = await prisma.payment.findUnique({
      where: { razorpayOrderId: razorpay_order_id },
      include: { preBooking: { include: { user: true } } },
    });

    if (payment && payment.status !== "SUCCESS") {
      await prisma.payment.update({
        where: { id: payment.id },
        data: {
          status: "SUCCESS",
          razorpayPaymentId: razorpay_payment_id,
          razorpaySignature: razorpay_signature,
        },
      });

      await prisma.preBooking.update({
        where: { id: payment.preBookingId },
        data: { status: "CONFIRMED" },
      });

      // Send the confirmation email natively
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

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Payment verification failed:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
