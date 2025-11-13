"use server";

import axios from "axios";

export async function verifyRecaptcha(token: string) {
  try {
    const res = await axios.post(
      "https://www.google.com/recaptcha/api/siteverify",
      null,
      {
        params: {
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: token,
        },
      }
    );
    const data = res.data;
    if (data.success) {
      return { success: true };
    } else {
      return { success: false, message: "Failed verification" };
    }
  } catch (err) {
    return { success: false, message: "Verification error" };
  }
}
