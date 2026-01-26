import { createTransport } from "nodemailer";

export const sendMail = async function (
  name: string,
  email: string | "SELF",
  subject: string,
  message: string,
): Promise<{ status: number; message: string }> {
  const user = process.env.NODEMAILER_USER;
  const pass = process.env.NODEMAILER_PASS;

  if (!user || !pass) {
    return {
      status: 500,
      message: "Internal server error: missing credentials",
    };
  }

  // Use explicit SMTP config for Gmail
  const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // use TLS
    auth: { user, pass },
  });

  const displayEmail = email === "SELF" ? user : email;

  const mailOptions = {
    from: user,
    to: user,
    subject: `Portfolio: [${subject}]`,
    text: `${name}: <${displayEmail}>\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return { status: 200, message: "Mail sent successfully" };
  } catch (error: any) {
    return {
      status: 500,
      message: error?.message || "Failed to send mail",
    };
  }
};