import { Injectable, Logger } from '@nestjs/common';
import { SendDto } from './send.dto';
import { InjectQueue } from '@nestjs/bull';
import { EMAIL_QUEUE, SEND_EMAIL } from '../../constants/email';
import { Queue } from 'bull';

@Injectable()
export class Send {
  private readonly _logger = new Logger(Send.name);

  constructor(@InjectQueue(EMAIL_QUEUE) private readonly _mailQueue: Queue) {}

  async execute(payload: SendDto) {
    try {
      await this._mailQueue.add(SEND_EMAIL, payload);

      return true;
    } catch (error) {
      this._logger.error(`Error queuing email for ${payload.to}`);

      return false;
    }
  }
}
