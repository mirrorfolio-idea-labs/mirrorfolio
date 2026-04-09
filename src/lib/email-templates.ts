import { Order } from "./orders";

export const getUserConfirmationEmail = (order: Order) => {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #171717; max-width: 600px; margin: 0 auto; padding: 20px;">
      <h2 style="color: #171717; font-weight: normal;">Welcome to Mirrorfolio early access, ${order.name}</h2>
      <p>Thank you for pre-ordering Mirrorfolio. We are building this for families like yours, and your early support means everything.</p>
      
      <p style="margin-top: 24px;"><strong>Your Details:</strong></p>
      <ul style="background: #f9f9f9; padding: 16px 24px; border-radius: 8px; list-style-type: none; margin-left: 0;">
        <li style="margin-bottom: 8px;"><strong>Email:</strong> ${order.email}</li>
        <li style="margin-bottom: 8px;"><strong>City:</strong> ${order.city}</li>
        <li><strong>Order ID:</strong> ${order.id}</li>
      </ul>

      <p style="margin-top: 24px;">We'll reach out when we are ready to launch in your area.</p>
      <p>If you have any questions or just want to chat, reply to this email directly.</p>
      
      <p style="margin-top: 40px;">
        Warmly,<br />
        <strong style="font-size: 16px;">Ahd. Kabeer Hadi</strong><br />
        <span style="color: #666;">Founder — Mirrorfolio Care</span>
      </p>
    </div>
  `;
};

export const getFounderNotificationEmail = (order: Order) => {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6;">
      <h2>🚨 New Pre-order Received!</h2>
      <p>A new family has joined the waitlist and paid ₹499.</p>
      
      <div style="background: #f0f8ff; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
        <p style="margin-top: 0;"><strong>Customer Details:</strong></p>
        <ul style="list-style-type: none; padding-left: 0;">
          <li><strong>Name:</strong> ${order.name}</li>
          <li><strong>Email:</strong> ${order.email}</li>
          <li><strong>Phone:</strong> ${order.phone}</li>
          <li><strong>City:</strong> ${order.city}</li>
        </ul>
      </div>

      <div style="background: #fff0f0; padding: 16px; border-radius: 8px; margin-bottom: 20px;">
        <p style="margin-top: 0;"><strong>Condition Context:</strong></p>
        <ul style="list-style-type: none; padding-left: 0;">
          <li><strong>Condition:</strong> ${order.condition}</li>
          <li><strong>Living Situation:</strong> ${order.livingSituation}</li>
          <li><strong>Discharge Timeline:</strong> ${order.dischargeTimeline}</li>
        </ul>
      </div>

      <div style="background: #f5f5f5; padding: 16px; border-radius: 8px;">
        <p style="margin-top: 0;"><strong>Payment Details:</strong></p>
        <ul style="list-style-type: none; padding-left: 0;">
          <li><strong>Razorpay Order ID:</strong> ${order.id}</li>
          <li><strong>Razorpay Payment ID:</strong> ${order.paymentId}</li>
        </ul>
      </div>
    </div>
  `;
};
