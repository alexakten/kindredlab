// app/api/submitForm/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Configure the SMTP transport for Nodemailer (use your Gmail credentials)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER, // Your Gmail address
    pass: process.env.GMAIL_PASS, // Your Gmail app password or less secure app password
  },
});

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, companyWebsite } = body;

  // Email content
  const mailOptions = {
    from: process.env.GMAIL_USER, // Sender's email address (your Gmail)
    to: process.env.RECEIVER_EMAIL, // Your email address where you want to receive notifications
    subject: "New Form Submission from Website",
    html: `
      <h1>New Contact Request</h1>
      <p><strong>Name:</strong> ${name || "N/A"}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Company Website:</strong> ${companyWebsite || "N/A"}</p>
    `,
  };

  try {
    // Send the email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Form submitted and email sent successfully!" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}
