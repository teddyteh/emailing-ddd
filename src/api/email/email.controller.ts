import {Body, Controller, Post} from '@nestjs/common';
import { Send } from '../../domain/email/send';
import {SendDto} from "../../domain/email/send.dto";

@Controller()
export class EmailController {
  constructor(private readonly sendEmail: Send) {}

  @Post()
  send(@Body() payload: SendDto) {
    return this.sendEmail.execute(payload);
  }
}
