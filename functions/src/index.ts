import { defineSecret, defineString } from "firebase-functions/params";
import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";
import { Resend } from "resend";
import { z } from "zod";

const resendApiKey = defineSecret("RESEND_API_KEY");
const resendToEmail = defineString("RESEND_TO_EMAIL");
const resendFromEmail = defineString("RESEND_FROM_EMAIL");
const resendFromName = defineString("RESEND_FROM_NAME");

const defaultToEmail = "genwaretechnologies@gmail.com";
const defaultFromEmail = "noreply@genwaretechnologies.in";
const defaultFromName = "Genware Technologies";

const optionalText = (maxLength: number) =>
  z.preprocess(
    (value) => (typeof value === "string" && value.trim() === "" ? undefined : value),
    z.string().trim().max(maxLength).optional()
  );

const consultationFormSchema = z.object({
  name: z.string().trim().min(1),
  email: z.string().trim().email(),
  phone: z.string().trim().min(1),
  company: optionalText(120),
  serviceInterest: optionalText(120),
  message: optionalText(2000)
});

const escapeHtml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const formatField = (label: string, value?: string) => {
  if (!value) return "";

  return `
    <tr>
      <td style="padding: 8px 0; color: #6b7280; font-weight: 600; vertical-align: top;">${escapeHtml(label)}</td>
      <td style="padding: 8px 0; color: #111827; vertical-align: top;">${escapeHtml(value)}</td>
    </tr>
  `;
};

export const sendConsultationEmail = onRequest(
  {
    cors: true,
    memory: "128MiB",
    secrets: [resendApiKey]
  },
  async (request, response) => {
    if (request.method !== "POST") {
      response.status(405).json({ error: "Method not allowed" });
      return;
    }

    const parsedForm = consultationFormSchema.safeParse(request.body);

    if (!parsedForm.success) {
      response.status(400).json({ error: "Invalid form data." });
      return;
    }

    const apiKey = resendApiKey.value();

    if (!apiKey) {
      logger.error("RESEND_API_KEY is not configured.");
      response.status(500).json({ error: "Email service is not configured." });
      return;
    }

    const { name, email, phone, company, serviceInterest, message } = parsedForm.data;
    const toEmail = resendToEmail.value() || defaultToEmail;
    const fromEmail = resendFromEmail.value() || defaultFromEmail;
    const fromName = resendFromName.value() || defaultFromName;
    const rows = [
      formatField("Name", name),
      formatField("Email", email),
      formatField("Phone", phone),
      formatField("Company", company),
      formatField("Service Interest", serviceInterest),
      formatField("Message", message || "No message provided.")
    ].join("");

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New free consultation request from ${name}`,
      text: [
        "New free consultation request",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        company ? `Company: ${company}` : "",
        serviceInterest ? `Service Interest: ${serviceInterest}` : "",
        "",
        "Message:",
        message || "No message provided."
      ].filter(Boolean).join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111827;">
          <h2 style="margin: 0 0 16px;">New free consultation request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tbody>${rows}</tbody>
          </table>
        </div>
      `
    });

    if (error) {
      logger.error("Failed to send consultation email.", { error });
      response.status(500).json({ error: "Failed to send email." });
      return;
    }

    logger.info("Consultation email sent.", { to: toEmail, from: email });
    response.status(200).json({ success: true });
  }
);
