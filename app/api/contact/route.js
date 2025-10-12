import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    // Handle FormData instead of JSON since the form submits as FormData
    const formData = await request.formData();

    // Extract form fields with default values

    const firstName = formData.get("firstName") || "";
    const lastName = formData.get("lastName") || "";
    const email = formData.get("email") || "";
    const phone = formData.get("phone") || "Not provided";
    const company = formData.get("conpanyName") || "Not specified";
    const productInterest =
      formData.get("productInterest") || "General inquiry";
    const message = formData.get("message") || "";
    const newsletter = formData.get("newsletter") || "off";

    const SUPPORT_EMAIL = process.env.SUPPORT_EMAIL;
    // Configure email service - using Gmail
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // upgrade later with STARTTLS
      service: "gmail",

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #ea580c; border-bottom: 2px solid #ea580c; padding-bottom: 10px;">
          🔧 New Contact Form Submission - FerroLink Tools
        </h2>
        
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #334155; margin-top: 0;">Customer Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Name:</td>
              <td style="padding: 8px 0;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Email:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #ea580c;">${email}</a></td>
            </tr>
            ${
              phone
                ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Phone:</td>
              <td style="padding: 8px 0;">${phone}</td>
            </tr>
            `
                : ""
            }
            ${
              company
                ? `
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Company:</td>
              <td style="padding: 8px 0;">${company}</td>
            </tr>
            `
                : ""
            }
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #64748b;">Product Interest:</td>
              <td style="padding: 8px 0; text-transform: capitalize;">${productInterest}</td>
            </tr>
          </table>
        </div>

        <div style="background: #fff; padding: 20px; border-left: 4px solid #ea580c; margin: 20px 0;">
          <h3 style="color: #334155; margin-top: 0;">Message</h3>
          <p style="color: #64748b; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>

        ${
          newsletter === "on"
            ? `
        <div style="background: #f0fdf4; padding: 15px; border-radius: 8px; margin: 20px 0;">
          <p style="margin: 0; color: #166534;">
            📧 <strong>Newsletter Subscription:</strong> Customer opted in to receive product updates
          </p>
        </div>
        `
            : ""
        }

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
          <p style="color: #94a3b8; font-size: 14px; margin: 0;">
            This message was sent from the FerroLink Tools contact form on ${new Date().toLocaleString()}
          </p>
        </div>
      </div>
    `;

    // Send email
    await transporter.sendMail({
      from: `"FerroLink Contact Form" <${process.env.EMAIL_USER}>`,
      to: SUPPORT_EMAIL,
      replyTo: email,
      subject: `🔧 New Contact: ${productInterest} - ${firstName} ${lastName}`,
      html: htmlContent,
    });

    // Send confirmation email to customer
    await transporter.sendMail({
      from: `"FerroLink Tools" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting FerroLink Tools",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #ea580c;">Thank you for your message!</h2>
          <p>Dear ${firstName},</p>
          <p>We have received your inquiry about <strong>${productInterest}</strong> and will respond within 1 business day.</p>
          <p>Our team of tool experts will review your requirements and provide you with detailed information and pricing.</p>
          <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3>What's Next?</h3>
            <ul>
              <li>Our sales team will review your inquiry</li>
              <li>We'll prepare a customized response</li>
              <li>You'll receive a detailed reply within 1 business day</li>
            </ul>
          </div>
          <p>Best regards,<br/>The FerroLink Tools Team</p>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
