import nodemailer from "nodemailer";
//TODO: change from
const from = '"Repemorizer" <info@repemorizer.com>';

function setup() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });
}

export function sendConfirmationEmail(user) {
    console.log(user.email)
  const transport = setup();
  const email = {
    from,
    to: user.email,
    subject: "Repemorizer confirmation",
    html: `
    <h1> Please, confirm your email. Click to "Confirm"</h1>

    <a href="${user.generateConfirmationUrl()}" >Confirm </a>
    `
  };

  transport.sendMail(email);
}

export function sendResetPasswordEmail(user) {
  const transport = setup();
  const email = {
    from,
    to: user.email,
    subject: "Repemorizer reset password",
    html: `
    <h1>To reset password follow this link:</h1> 

    <a href="${user.generateResetPasswordUrl()}">Reset<a>
    `
  };

  transport.sendMail(email);
}
