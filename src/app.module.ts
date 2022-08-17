import { Module } from '@nestjs/common';
import { EmailModule } from './infrastructure/module/email.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailerConfig } from './config/mail.config';

@Module({
  imports: [
    MailerModule.forRootAsync({
      useClass: MailerConfig,
    }),
    EmailModule,
  ],
})
export class AppModule {}
