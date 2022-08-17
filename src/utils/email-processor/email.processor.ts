import { Injectable, Logger } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { Process, Processor } from '@nestjs/bull';
import { EMAIL_QUEUE, SEND_EMAIL } from '../../constants/email';
import { SendDto } from '../../domain/email/send.dto';

@Injectable()
@Processor(EMAIL_QUEUE)
export class EmailProcessor {
  private readonly _logger = new Logger(EmailProcessor.name);

  constructor(private readonly mailerService: MailerService) {}

  @Process(SEND_EMAIL)
  async execute({ to, subject, text }: SendDto) {
    this._logger.log(`Sending email to ${to}`);

    try {
      await this.mailerService.sendMail({
        to,
        from: 'noreply@nestjs.com',
        subject,
        text,
      });

      this._logger.log(`Successfully sent email to ${to}!`);

      return true;
    } catch (error) {
      this._logger.log(`Failed to send email to ${to}`);

      return false;
    }
  }
}
