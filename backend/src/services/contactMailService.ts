import nodemailer from 'nodemailer';

import type { ContactFormPayload } from '../types/contact';

const getRequiredEnv = (key: string) => {
  const value = process.env[key];

  if (!value) {
    throw new Error(
      `Something went wrong.`,
    );
  }

  return value;
};

const buildTransporter = () => {
  const smtpHost = getRequiredEnv('SMTP_HOST');
  const smtpPort = Number(getRequiredEnv('SMTP_PORT'));
  const smtpUser = getRequiredEnv('SMTP_USER');
  const smtpPass = getRequiredEnv('SMTP_PASS');

  return nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const formatEmailHtml = (title: string, data: ContactFormPayload) => {
  const serviceLabel = data.service ? `Service: ${escapeHtml(data.service)}<br />` : '';
  const message = data.message ? escapeHtml(data.message) : 'No message provided';

  return `
    <div style="font-family: Arial, sans-serif; color: #1a1a1a; line-height: 1.6;">
      <h2 style="margin-bottom: 12px;">${title}</h2>
      <p><strong>Name:</strong> ${escapeHtml(data.name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
      ${serviceLabel}
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br />')}</p>
    </div>
  `;
};

export const sendContactMail = async (payload: ContactFormPayload) => {
  const siteName = process.env.SITE_NAME || 'Mindcraft Studio';
  const senderEmail = process.env.SMTP_FROM || process.env.SMTP_USER || getRequiredEnv('SMTP_USER');
  const adminEmail = process.env.CONTACT_ADMIN_EMAIL || senderEmail;
  const transporter = buildTransporter();

  const adminMail = {
    from: `"${siteName}" <${senderEmail}>`,
    to: adminEmail,
    replyTo: payload.email,
    subject: `New contact inquiry from ${payload.name}`,
    html: formatEmailHtml(`New inquiry from ${payload.name}`, payload),
  };

  const customerMail = {
    from: `"${siteName}" <${senderEmail}>`,
    to: payload.email,
    subject: `Thank you for contacting ${siteName}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #1a1a1a; line-height: 1.6;">
        <h2 style="margin-bottom: 12px;">Thank you for your message</h2>
        <p>Hello ${escapeHtml(payload.name)},</p>
        <p>Thank you for reaching out to ${siteName}. We have received your details and our team will contact you soon.</p>
        <p><strong>Your details:</strong></p>
        <p>Name: ${escapeHtml(payload.name)}<br />
           Email: ${escapeHtml(payload.email)}<br />
           Phone: ${escapeHtml(payload.phone)}</p>
        <p>We look forward to helping you with your project.</p>
        <p>Warm regards,<br />${siteName}</p>
      </div>
    `,
  };

  await transporter.sendMail(adminMail);
  await transporter.sendMail(customerMail);

  return { success: true };
};
