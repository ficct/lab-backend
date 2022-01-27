import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';

import { User } from 'entities/User';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendUserConfirmation(user: User, token = process.env.SECRET) {
    const url = `${process.env.ROOT}/users/${user.id}/confirm?token=${token}`;

    await this.mailerService.sendMail({
      to: user.verifiedEmail,
      subject: 'Confirm your Email',
      template: './confirmation',
      context: {
        url: url,
        name: user.name,
      },
    });
  }
}
