import { EmailController } from './email.controller';
import { Send } from '../../domain/email/send';
import { MailerService } from '@nestjs-modules/mailer';

describe('EmailController', () => {
  let send: Send;
  let emailController: EmailController;

  beforeEach(() => {
    send = new Send({} as MailerService);
    emailController = new EmailController(send);
  });

  describe('send', () => {
    it('should return true', async () => {
      jest.spyOn(send, 'execute').mockResolvedValue(true);

      expect(
        await emailController.send({
          to: 'test@email.com',
          subject: 'Subject',
          text: 'This is a text.',
        }),
      ).toBe(true);
    });
  });
});
