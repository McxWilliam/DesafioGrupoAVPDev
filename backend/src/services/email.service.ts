import * as nodemailer from 'nodemailer';

export class EmailService {
  private transporter: nodemailer.Transporter;

  constructor() {
    // Configurar o transporte para enviar e-mails
    this.transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'william.bacelar@gmail.com',
        pass: '', // precisa ter um email valido e a senha 
      },
    });
  }

  async sendBirthdayEmail(to: string) {
    try {
      const subject = 'Feliz Aniversário!';
      const body = `
        <html>
          <body>
            <h1>Parabéns pelo seu aniversário!</h1>
            <p>Desejamos a você um dia especial e cheio de alegrias.</p>
            <p>Atenciosamente,</p>
            <p>GRUPO DE DEV'S AVP</p>
          </body>
        </html>
      `;

      // Enviar o e-mail de parabéns
      const mailOptions = {
        from: 'william.bacelar@gmail.com',
        to: 'william_bacelar@hotmail.com',
        subject,
        html: body,
      };

      await this.transporter.sendMail(mailOptions);
      console.log('E-mail de parabéns enviado com sucesso para:', to);
    } catch (error) {
      console.error('Erro ao enviar o e-mail de parabéns:', error);
    }
  }
}
