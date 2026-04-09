import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { prisma } from "@/lib/db";
import { z } from "zod";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  city: z.string(),
  condition: z.string(),
  livingSituation: z.string(),
  dischargeTimeline: z.string(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = schema.parse(body);

    const amount = 499;

    const user = await prisma.user.upsert({
      where: { email: parsed.email },
      update: { name: parsed.name, phone: parsed.phone },
      create: { email: parsed.email, name: parsed.name, phone: parsed.phone },
    });

    const preBooking = await prisma.preBooking.create({
      data: {
        userId: user.id,
        city: parsed.city,
        condition: parsed.condition,
        livingSituation: parsed.livingSituation,
        dischargeTimeline: parsed.dischargeTimeline,
        amount: amount,
        status: "PENDING",
      },
    });

    const options = {
      amount: Math.round(amount * 100),
      currency: "INR",
      receipt: preBooking.id,
    };

    const order = await razorpay.orders.create(options);

    await prisma.payment.create({
      data: {
        preBookingId: preBooking.id,
        razorpayOrderId: order.id,
        amount: amount,
        currency: "INR",
      },
    });

    return NextResponse.json({ 
      orderId: order.id, 
      amount: options.amount, 
      currency: options.currency, 
      keyId: process.env.RAZORPAY_KEY_ID! 
    });
  } catch (error: any) {
    console.error("Order creation failed:", error);
    return NextResponse.json({ error: error.message || "Failed to create order" }, { status: 500 });
  }
}
