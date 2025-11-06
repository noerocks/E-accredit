"use server";

import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { JSX } from "react";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function sendEmail({
  to,
  subject,
  react,
}: {
  to: string;
  subject: string;
  react: JSX.Element;
}) {
  const html = await render(react);
  try {
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to,
      subject,
      html,
    });
    return { success: { message: "Email sent successfully" } };
  } catch (error) {
    const e = error as Error;
    return { failure: { error: e.message } };
  }
}
