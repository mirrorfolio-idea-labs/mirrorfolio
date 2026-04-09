export interface TemplateProps {
  name: string;
  city?: string;
}

export function getWelcomeEmail({ name, city }: TemplateProps) {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px 20px; color: #0f172a;">
      <div style="text-align: center; margin-bottom: 32px;">
        <!-- Using text for fallback, or absolute URL when deployed in production -->
        <h2 style="margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.5px; color: #0f172a;">Mirrorfolio</h2>
      </div>
      
      <p style="font-size: 16px; line-height: 24px; color: #334155;">Hi ${name || 'there'},</p>
      
      <p style="font-size: 16px; line-height: 24px; color: #334155;">
        I'm Kabeer, the founder of Mirrorfolio. I wanted to personally reach out and thank you for pre-booking with us.
      </p>

      <p style="font-size: 16px; line-height: 24px; color: #334155;">
        Building Mirrorfolio has been a deeply personal journey, and knowing that families like yours trust us to help care for your parents means the world to me.
      </p>

      <div style="background-color: #fff7ed; border: 1px solid #ffedd5; border-radius: 12px; padding: 24px; margin: 32px 0;">
        <h3 style="margin: 0 0 12px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #c2410c;">Your Booking Details</h3>
        <p style="margin: 0; font-size: 15px; color: #0f172a;"><strong>Status:</strong> Confirmed</p>
        <p style="margin: 8px 0 0 0; font-size: 15px; color: #0f172a;"><strong>Location:</strong> ${city || 'Your Area'}</p>
        <p style="margin: 8px 0 0 0; font-size: 15px; color: #0f172a;"><strong>Amount:</strong> ₹499 (Fully Refundable)</p>
      </div>

      <p style="font-size: 16px; line-height: 24px; color: #334155;">
        We are working tirelessly to open our doors in ${city || 'your city'}. You're at the very front of the line, and we'll keep you updated on all our progress.
      </p>

      <p style="font-size: 16px; line-height: 24px; color: #334155;">
        If you have any questions or just want to share your parent's story, you can reply directly to this email. I read every single one.
      </p>
      
      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 32px 0;" />
      
      <p style="font-size: 16px; line-height: 24px; color: #334155; margin: 0;">Warmly,</p>
      <p style="font-size: 16px; line-height: 24px; color: #0f172a; margin: 4px 0 0 0;"><strong>Kabeer</strong></p>
      <p style="font-size: 14px; color: #64748b; margin: 0;">Founder, Mirrorfolio</p>
      
      <div style="margin-top: 48px; text-align: center;">
        <p style="font-size: 12px; color: #94a3b8; margin: 0 0 4px 0;">© ${new Date().getFullYear()} Mirrorfolio Idea Labs Pvt. Ltd.</p>
        <p style="font-size: 12px; color: #94a3b8; margin: 0;">Built with conviction in Bangalore, India</p>
      </div>
    </div>
  `;
}

export function getNewsletterEmail({ name, content }: { name: string, content: string }) {
  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 40px 20px; color: #0f172a;">
      <div style="text-align: center; margin-bottom: 32px;">
        <h2 style="margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.5px; color: #0f172a;">Mirrorfolio</h2>
      </div>
      
      <p style="font-size: 16px; line-height: 24px; color: #334155;">Hi ${name || 'there'},</p>
      
      <div style="font-size: 16px; line-height: 24px; color: #334155;">
        ${content}
      </div>
      
      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 32px 0;" />
      
      <p style="font-size: 16px; line-height: 24px; color: #334155; margin: 0;">Warmly,</p>
      <p style="font-size: 16px; line-height: 24px; color: #0f172a; margin: 4px 0 0 0;"><strong>Kabeer</strong></p>
      <p style="font-size: 14px; color: #64748b; margin: 0;">Founder, Mirrorfolio</p>
    </div>
  `;
}
