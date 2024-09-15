import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
   try {
      const {
         SMTP_HOST,
         SMTP_USER,
         SMTP_PASSWORD,
         SMTP_PORT,
         QUOTE_REQUEST_RECIPIENT_EMAIL,
      } = process.env;

      const formData = await request.json();

      const { fullName, email, phoneNumber, subject, message } = formData;

      const transporter = nodemailer.createTransport({
         host: SMTP_HOST,
         port: parseInt(SMTP_PORT as string),
         secure: parseInt(SMTP_PORT as string) === 465,
         auth: {
            user: SMTP_USER,
            pass: SMTP_PASSWORD,
         },
      });

      const mailOptions = {
         from: SMTP_USER,
         to: QUOTE_REQUEST_RECIPIENT_EMAIL,
         subject: `New Quote Request from ${fullName}`,
         html: `
               <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Quote Request</title>
    <style>
        .content-wrapper {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
        }
        .container{
            background-color: #ffffff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            background-color: #FFA500;
            color: white;
            padding: 20px;
            text-align: center;
        }
        .content {
            background-color: #f9f9f9;
            padding: 20px;
            border-radius: 5px;
        }
        .field {
            margin-bottom: 15px;
        }
        .label {
            font-weight: bold;
            color: #FFA500;
        }
    </style>
</head>
<body>
    <div class="content-wrapper">
        <div class="container">
            <div class="header">
                <h1>New Quote Request</h1>
            </div>
            <div class="content">
                <p>A new quote request has been submitted through the website:</p>
                
                <div class="field">
                    <span class="label">Full Name:</span>
                    <span>${fullName}</span>
                </div>
                
                <div class="field">
                    <span class="label">Email:</span>
                    <span>${email}</span>
                </div>
                
                <div class="field">
                    <span class="label">Phone Number:</span>
                    <span>${phoneNumber}</span>
                </div>
                
                <div class="field">
                    <span class="label">Subject:</span>
                    <span>${subject}</span>
                </div>
                
                <div class="field">
                    <span class="label">Message:</span>
                    <p>${message}</p>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
            `,
      };

      await transporter.sendMail(mailOptions);

      return NextResponse.json({
         success: true,
         message: 'Email sent successfully!',
      });
   } catch (error) {
      console.error('Error sending email:', error);
      return NextResponse.json(
         { success: false, message: 'Error sending email' },
         { status: 500 }
      );
   }
}
