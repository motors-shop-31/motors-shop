import { createTransport } from "nodemailer";
import { IEmailRequest } from "./interfaces/email";
import "dotenv/config"

const sendEmail = async ({subject, code, to}: IEmailRequest): Promise<void> => {
    const transporter = createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })

    const codeMessage = `<!DOCTYPE> 
    <html>
      <body>
        <p>Your authentication code is : </p> <b>${code}</b>
      </body>
    </html>`

    await transporter.sendMail({
        from: process.env.SMTP_USER,
        to: to,
        subject: subject,
        html: codeMessage
    }).then(() => {
        console.log('Email send with success')
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }).catch((err: any) => {
        console.log(err)
        throw new Error('Error sending email, try again')
    })
}

export { sendEmail }