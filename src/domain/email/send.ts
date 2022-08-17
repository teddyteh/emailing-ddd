import { Injectable } from '@nestjs/common';
import { SendDto } from './send.dto';
import { MailerService } from '@nestjs-modules/mailer';

@Injectable()
export class Send {
  constructor(private readonly mailerService: MailerService) {}

  async execute({ to, subject, text }: SendDto) {
    try {
      await this.mailerService.sendMail({
        to,
        from: 'noreply@nestjs.com',
        subject,
        text,
      });

      return true;
    } catch (error) {
      return false;
    }
  }
}
