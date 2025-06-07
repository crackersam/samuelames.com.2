"use server";
export const contactAction = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const body = formData.get("body") as string;
  const token = formData.get("hcaptchaToken") as string;

  if (!name || !email || !body || !token) {
    return { error: "All fields (including captcha) are required." };
  }

  // 1. Verify the token with hCaptcha
  const verifyRes = await fetch("https://hcaptcha.com/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.HCAPTCHA_SECRET!, // ← your server‐only secret
      response: token,
    }),
  });
  const verifyJson = await verifyRes.json();

  if (!verifyJson.success) {
    // you can inspect verifyJson["error-codes"] here for debugging
    return { error: "Captcha verification failed. Please try again." };
  }

  // 2. If we get here, captcha passed—send the email
  await fetch(`${process.env.BASE_URL}/api/send`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      to: "samames842@gmail.com",
      from: "business@samuelames.com",
      subject: "Contact Form Submission",
      text: body + `\n\nFrom: ${name} <${email}>`,
    }),
  });

  return { success: true, message: "Thank you for your message!" };
};
