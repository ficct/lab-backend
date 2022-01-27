import { Module } from '@nestjs/common';

import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';

import { MailService } from './mail.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        secure: false,
        host: process.env.MAIL_HOST,
        auth: {
          user: process.env.MAIL_USER,
          pass: process.env.MAIL_PASS,
        },
      },
      defaults: {
        from: `"No Reply" ${process.env.MAIL_USER}`,
      },
      template: {
        dir: 'src/auth/mail',
        options: { strict: true },
        adapter: new HandlebarsAdapter(),
      },
    }),
  ],
  exports: [MailService],
  providers: [MailService],
})
export class MailModule {}
