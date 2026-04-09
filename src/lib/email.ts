import nodemailer from "nodemailer";
import { prisma } from "./db";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendEmail({
  to,
  subject,
  type,
  html,
}: {
  to: string;
  subject: string;
  type: string;
  html: string;
}) {
  try {
    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to,
      subject,
      html,
    });

    await prisma.emailLog.create({
      data: {
        to,
        subject,
        type,
        status: "SENT",
      },
    });
  } catch (error: any) {
    console.error("Email sending failed:", error);
    await prisma.emailLog.create({
      data: {
        to,
        subject,
        type,
        status: "FAILED",
        errorMsg: error.message,
      },
    });
  }
}
