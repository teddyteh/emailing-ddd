import { EmailController } from '../../api/email/email.controller';
import { Send } from '../../domain/email/send';
import { Module } from '@nestjs/common';
import { BullModule } from '@nestjs/bull';
import { EMAIL_QUEUE } from '../../constants/email';
import { EmailProcessor } from '../../utils/email-processor/email.processor';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailerConfig } from '../../config/mail.config';

@Module({
  controllers: [EmailController],
  providers: [EmailProcessor, Send],
  imports: [
    MailerModule.forRootAsync({
      useClass: MailerConfig,
    }),
    BullModule.registerQueue({
      name: EMAIL_QUEUE,
    }),
  ],
})
export class EmailModule {}
