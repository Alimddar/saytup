import nodemailer from 'nodemailer';

export interface ContactEmailPayload {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  budget?: string;
  message: string;
}

let transporter: nodemailer.Transporter | null = null;

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function getRequiredEnv(name: string) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not configured`);
  }
  return value;
}

function getTransporter() {
  if (transporter) {
    return transporter;
  }

  const host = getRequiredEnv('SMTP_HOST');
  const user = getRequiredEnv('SMTP_USER');
  const pass = getRequiredEnv('SMTP_PASS');
  const port = Number(process.env.SMTP_PORT ?? '587');

  transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: {
      user,
      pass,
    },
  });

  return transporter;
}

export async function sendContactEmail(payload: ContactEmailPayload) {
  const smtpUser = getRequiredEnv('SMTP_USER');
  const fromName = process.env.SMTP_FROM_NAME ?? 'saytup';
  const to = process.env.CONTACT_TO_EMAIL ?? smtpUser;

  const subjectParts = ['Yeni Saytup müraciəti', payload.name];
  if (payload.service) {
    subjectParts.push(payload.service);
  }

  const safeName = escapeHtml(payload.name);
  const safeEmail = escapeHtml(payload.email);
  const safePhone = escapeHtml(payload.phone || 'Qeyd olunmayıb');
  const safeService = escapeHtml(payload.service || 'Seçilməyib');
  const safeBudget = escapeHtml(payload.budget || 'Seçilməyib');
  const safeMessage = escapeHtml(payload.message);

  const text = [
    'Saytup contact formundan yeni mesaj var.',
    '',
    `Ad Soyad: ${payload.name}`,
    `E-poçt: ${payload.email}`,
    `Telefon: ${payload.phone || 'Qeyd olunmayıb'}`,
    `Xidmət: ${payload.service || 'Seçilməyib'}`,
    `Paket: ${payload.budget || 'Seçilməyib'}`,
    '',
    'Mesaj:',
    payload.message,
  ].join('\n');

  const html = `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
      <h2 style="margin-bottom: 16px;">Saytup contact formundan yeni mesaj var</h2>
      <table style="border-collapse: collapse; width: 100%; max-width: 640px;">
        <tbody>
          <tr>
            <td style="padding: 8px 0; font-weight: 700;">Ad Soyad</td>
            <td style="padding: 8px 0;">${safeName}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 700;">E-poçt</td>
            <td style="padding: 8px 0;">${safeEmail}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 700;">Telefon</td>
            <td style="padding: 8px 0;">${safePhone}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 700;">Xidmət</td>
            <td style="padding: 8px 0;">${safeService}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: 700;">Paket</td>
            <td style="padding: 8px 0;">${safeBudget}</td>
          </tr>
        </tbody>
      </table>
      <div style="margin-top: 20px;">
        <p style="margin: 0 0 8px; font-weight: 700;">Mesaj</p>
        <p style="margin: 0; white-space: pre-wrap;">${safeMessage}</p>
      </div>
    </div>
  `;

  await getTransporter().sendMail({
    from: `"${fromName}" <${smtpUser}>`,
    to,
    replyTo: payload.email,
    subject: subjectParts.join(' — '),
    text,
    html,
  });
}
