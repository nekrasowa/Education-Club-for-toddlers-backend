import { Injectable } from '@nestjs/common';
import { Resend } from 'resend';
import { passwordResetTemplate } from './templates/pasword-reset.templates';

@Injectable()
export class MailService {
  private readonly resend: Resend;

  constructor() {
    this.resend = new Resend(process.env.RESEND_API_KEY);
  }

  async sendPasswordResetEmail(email: string, resetToken: string) {
    const resetUrl = `${process.env.FRONTEND_URL}/reset-password?token=${resetToken}`;

    const { data, error } = await this.resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Reset your ForChild password',
      html: passwordResetTemplate(resetUrl)
    });

    if (error) {
      throw new Error(error.message);
    }

    return data;
  }
}
