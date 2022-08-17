import { Module } from '@nestjs/common';
import { EmailModule } from './infrastructure/module/email.module';

@Module({
  imports: [
    EmailModule,
  ],
})
export class AppModule {}
