"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sendConfirmationEmail = sendConfirmationEmail;
exports.sendResetPasswordEmail = sendResetPasswordEmail;

var _nodemailer = require("nodemailer");

var _nodemailer2 = _interopRequireDefault(_nodemailer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var from = '"Repemorizer" <repemorizer@gmail.com>';

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
  var transport = setup();
  var email = {
    from: from,
    to: user.email,
    subject: "Repemorizer confirmation",
    html: "\n    <h1> Please, confirm your email. Click to \"Confirm\"</h1>\n\n    <a href=\"" + user.generateConfirmationUrl() + "\" >Confirm </a>\n    "
  };

  transport.sendMail(email);
}

function sendResetPasswordEmail(user) {
  var transport = setup();
  var email = {
    from: from,
    to: user.email,
    subject: "Repemorizer reset password",
    html: "\n    <h1>To reset password follow this link:</h1> \n\n    <a href=\"" + user.generateResetPasswordUrl() + "\">Reset<a>\n    "
  };

  transport.sendMail(email);
}