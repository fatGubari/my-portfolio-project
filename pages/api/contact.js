// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nodemailer from "nodemailer";
export default function handler(req, res) {
  // res.status(200).json({ name: 'John Doe' })
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_EMAIL_ADDRESS,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
    secure: true,
    authMethod: "PLAIN",
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailData = {
    from: `${req.body.email}`,
    to: ["fatimajubary@gmail.com"],
    subject: `${req.body.subject}`,
    text: `${req.body.message}`,
    html: `
    <div style="background:#fff; padding:15px;">
    <h3>from</h3>
    <p>${req.body.name}</p>
    <h3>message</h3>
    <p>${req.body.message}</p>
    </div>
    `,
  };

  transporter.sendMail(mailData, (err, info) => {
    if (err) {
      console.log("Error: ", err);
      res.status(500).json({ error: "Error sending message" });
      return;
    }
    console.log(`Message delivered to ${info.accepted}`);
    res.status(200).json({ message: "Message sent" });
  });
}
