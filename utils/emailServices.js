import nodemailer from 'nodemailer';

const SMTP_CONFIG = {
  host: 'smtp.gmail.com',
  port: 587,
  auth: {
    user: 'nintendoapi@gmail.com',
    pass: 'nintendoAPI123'
  }
};

const transporter = nodemailer.createTransport(SMTP_CONFIG);

export const sendRecoveryEmail = async (email, recoveryCode) => {
  try {
    await transporter.sendMail({
      from: SMTP_CONFIG.auth.user,
      to: email,
      subject: 'Password Recovery',
      text: `Your recovery code is: ${recoveryCode}`
    });
    console.log('Recovery email sent successfully');
  } catch (error) {
    console.error('Error sending recovery email:', error);
    throw error;
  }
};