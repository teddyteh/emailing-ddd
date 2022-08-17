import { EmailController } from '../../api/email/email.controller';
import { Send } from '../../domain/email/send';
import { Module } from '@nestjs/common';

@Module({
  controllers: [EmailController],
  providers: [Send],
})
export class EmailModule {}
