"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendConfirmationEmail = sendConfirmationEmail;
exports.sendResetPasswordEmail = sendResetPasswordEmail;

var _nodemailer = require("nodemailer");

var _nodemailer2 = _interopRequireDefault(_nodemailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const from = '"Repemorizer" <repemorizer@gmail.com>';

function setup() {
  return _nodemailer2.default.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });
}

function sendConfirmationEmail(user) {
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

function sendResetPasswordEmail(user) {
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