import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  // Parse multipart/form-data
  const formData = await req.formData();
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const portfolio = formData.get('portfolio') as string;
  const role = formData.get('role') as string;
  const message = formData.get('message') as string;
  const resumeFile = formData.get('resume') as File | null;

  // Configure transporter (use environment variables in production)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  // Sleek, premium HTML email
  const html = `
    <div style="background: #181818; color: #fff; font-family: 'Segoe UI', 'Roboto', Arial, sans-serif; padding: 40px; border-radius: 18px; max-width: 600px; margin: auto; box-shadow: 0 8px 32px rgba(0,0,0,0.18);">
      <div style="text-align: center; margin-bottom: 32px;">
        <img src='https://neuralarc.ai/logo.png' alt='NeuralARC Logo' style='height: 48px; margin-bottom: 16px;' />
        <h2 style="font-size: 2.2rem; font-weight: 700; margin: 0; letter-spacing: -1px;">New Careers Application</h2>
        <p style="color: #C6AEA3; font-size: 1.1rem; margin-top: 8px;">A candidate submitted their details via the NeuralARC careers form.</p>
      </div>
      <div style="background: #232323; border-radius: 12px; padding: 24px 28px; margin-bottom: 24px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; color: #C6AEA3;">Name:</td><td style="padding: 8px 0; color: #fff; font-weight: 500;">${name}</td></tr>
          <tr><td style="padding: 8px 0; color: #C6AEA3;">Email:</td><td style="padding: 8px 0; color: #fff; font-weight: 500;">${email}</td></tr>
          <tr><td style="padding: 8px 0; color: #C6AEA3;">Portfolio:</td><td style="padding: 8px 0; color: #fff; font-weight: 500;"><a href="${portfolio}" style="color: #8ecae6; text-decoration: underline;">${portfolio}</a></td></tr>
          <tr><td style="padding: 8px 0; color: #C6AEA3;">Role:</td><td style="padding: 8px 0; color: #fff; font-weight: 500;">${role}</td></tr>
          <tr><td style="padding: 8px 0; color: #C6AEA3; vertical-align: top;">Message:</td><td style="padding: 8px 0; color: #fff; font-weight: 500; white-space: pre-line;">${message}</td></tr>
        </table>
      </div>
      <div style="text-align: center; color: #868686; font-size: 1rem; margin-top: 24px;">NeuralARC Careers — <a href='https://neuralarc.ai' style='color: #C6AEA3; text-decoration: none;'>neuralarc.ai</a></div>
    </div>
  `;

  // Prepare attachments if resume is present
  const attachments = [];
  if (resumeFile) {
    const arrayBuffer = await resumeFile.arrayBuffer();
    attachments.push({
      filename: resumeFile.name,
      content: Buffer.from(arrayBuffer),
      contentType: resumeFile.type,
    });
  }

  try {
    await transporter.sendMail({
      from: `NeuralARC Careers <${process.env.SMTP_USER}>`,
      to: 'careers@neuralarc.ai',
      subject: `New Careers Application: ${name} (${role})`,
      html,
      attachments,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: (error as Error).message }, { status: 500 });
  }
} 