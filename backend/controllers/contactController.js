import User from "../model/contactModel.js";
import nodemailer from "nodemailer";

export const contactUser = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Please provide Name, Email and Message",
      });
    }

    // email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address",
      });
    }

    const contact = await User.create({ name, email, message });

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `New message from portfolio — ${name}`,
      html: `
        <div style="max-width: 480px; margin: 40px auto; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #1a1a1a; border: 1px solid #e0e0e0; padding: 40px;">
          
          <p style="font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #999; margin: 0 0 32px 0;">
            Portfolio Contact Form
          </p>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 13px; color: #999; width: 80px;">NAME</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 13px; color: #999;">EMAIL</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f0f0f0; font-size: 15px;">
                <a href="mailto:${email}" style="color: #1a1a1a;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; font-size: 13px; color: #999; vertical-align: top;">MESSAGE</td>
              <td style="padding: 12px 0; font-size: 15px; line-height: 1.6;">${message}</td>
            </tr>
          </table>

          <p style="font-size: 11px; color: #bbb; margin: 32px 0 0 0; letter-spacing: 0.1em;">
            DO NOT REPLY DIRECTLY TO THIS EMAIL
          </p>

        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Message received and email sent successfully",
      contact,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Something went wrong, try again",
      error: err.message,
    });
  }
};
