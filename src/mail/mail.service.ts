import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';

@Injectable()
export class MailService {
  private readonly resend: Resend;

  constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY);
  }

  async sendTestEmail(email: string) {
    const { data, error } = await this.resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'ForChild test email',
      html: `
        <h1>Hello!</h1>
        <p>This is a test email from ForChild.</p>
      `
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}
