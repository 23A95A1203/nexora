import 'dotenv/config';
import transporter from './transporter.js';

transporter.sendMail({
  from: process.env.EMAIL_FROM,
  to: 'your-personal-email@example.com',  // replace with your personal email
  subject: 'SMTP Test',
  text: 'Hello! SMTP is working with Brevo.'
})
.then(() => console.log('Test email sent'))
.catch(err => console.error('Test email failed:', err));
