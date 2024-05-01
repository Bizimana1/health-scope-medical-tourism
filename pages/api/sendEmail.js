

// pages/api/sendEmail.js
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, email, subject, message } = req.body;

    // Create a Nodemailer transporter
    let transporter = nodemailer.createTransport({
      host: 'mail.healthscopemed.com',
      port: 465,
      secure: true,
      auth: {
        user: 'marketing@healthscopemed.com',
        pass: 'Healthy-Marketing',
      },
    });

    // Define email options
    let mailOptions = {
      from: 'marketing@healthscopemed.com',
      to: 'bizimanasalomon85@gmail.com', // Corrected email address
      subject: subject,
      text: `Name: ${fullName}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email', details: error.message });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}

