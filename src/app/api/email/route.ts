import { render } from "@react-email/render";
import nodemailer from 'nodemailer';
import Welcome from "@/emails/welcome";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_SERVER_HOST,
  port: Number(process.env.EMAIL_SERVER_PORT),
  secure: true,
  auth: {
    user: process.env.EMAIL_SERVER_USER,
    pass: process.env.EMAIL_SERVER_PASSWORD,
  },
});

export async function POST() {
  try {
    // Await the result of the render function
    const emailHtml = await render(Welcome());

    const options = {
      from: 'info@greengroovetech.com',
      to: 'rajatratewal@gmail.com',
      subject: "🌟Welcome To Green Groove!🎨💚",
      html: emailHtml,
    };

    // Send the email
    await transporter.sendMail(options);

    return Response.json({ status: "Welcome Email Sent Successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    return Response.json({ status: "Error sending email", error: error.message });
  }
}
