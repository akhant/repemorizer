"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require("mongoose");

var _mongoose2 = _interopRequireDefault(_mongoose);

var _bcrypt = require("bcrypt");

var _bcrypt2 = _interopRequireDefault(_bcrypt);

var _jsonwebtoken = require("jsonwebtoken");

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Schema = _mongoose2.default.Schema;


var User = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    index: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  passwordHash: { type: String, required: true },
  confirmed: { type: Boolean, default: false },
  confirmationToken: { type: String, default: "", expires: "1d" },
  resetPasswordToken: { type: String, default: "", expires: "1d" }

}, { timestamps: true });

User.methods.setPassword = function (password) {
  this.passwordHash = _bcrypt2.default.hashSync(password, 10);
};

User.methods.setConfirmationToken = function () {
  this.confirmationToken = this.generateJWT();
};

User.methods.isValidPassword = function (password) {
  return _bcrypt2.default.compareSync(password, this.passwordHash);
};

User.methods.withToken = function () {
  return {
    username: this.username,
    email: this.email,
    confirmed: this.confirmed,
    token: this.generateJWT()
  };
};

User.methods.generateJWT = function () {
  return _jsonwebtoken2.default.sign({
    email: this.email,
    username: this.username,
    confirmed: this.confirmed,
    userId: this._id
  }, process.env.JWT_SECRET);
};

User.methods.generateConfirmationUrl = function () {
  return "https://repemorizer.herokuapp.com/api/confirmation/" + this.confirmationToken;
};
User.methods.setResetPasswordToken = function () {
  this.resetPasswordToken = this.generateJWT();
};

User.methods.generateResetPasswordUrl = function () {
  return "https://repemorizer.herokuapp.com/reset_password/" + this.resetPasswordToken;
};

exports.default = _mongoose2.default.model("User", User);