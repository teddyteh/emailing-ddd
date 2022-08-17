import { Send } from './send';
import { Queue } from 'bull';

describe('Send', () => {
  let mailerService: Queue;
  let send: Send;
  let add = jest.fn();

  beforeEach(() => {
    mailerService = { add } as unknown as Queue;
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
      expect(add).toHaveBeenCalledTimes(1);
    });
  });
});
