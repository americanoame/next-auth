import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return Response.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"GeoCore.ai" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: "New GeoCore.ai Interest Request",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
          <h1 style="color: #4f46e5;">GeoCore.ai</h1>

          <h2>New Interest Request</h2>

          <p>A new company email was submitted through the website.</p>

          <p>
            <strong>Company Email:</strong><br>
            ${email}
          </p>

          <hr>

          <p style="color: #666;">
            GeoCore.ai — Geopolitical Intelligence for Business
          </p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error(error);

    return Response.json(
      { error: "Unable to send email" },
      { status: 500 }
    );
  }
}