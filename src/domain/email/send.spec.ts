import { Send } from './send';
import { MailerService } from '@nestjs-modules/mailer';

describe('Send', () => {
  let mailerService: MailerService;
  let send: Send;
  let sendMail = jest.fn();

  beforeEach(() => {
    mailerService = { sendMail } as unknown as MailerService;
    send = new Send(mailerService);
  });

  describe('Send', () => {
    it('should return true', async () => {
      expect(
        await send.execute({
          to: 'test@email.com',
          subject: 'Subject',
          text: 'This is a text.',
        }),
      ).toBe(true);
      expect(sendMail).toHaveBeenCalledTimes(1);
    });
  });
});
