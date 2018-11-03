import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const { Schema } = mongoose;

const User = new Schema({
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
  resetPasswordToken: { type: String, default: "", expires: "1d" },
  
}, {timestamps: true});

User.methods.setPassword = function(password) {
  this.passwordHash = bcrypt.hashSync(password, 10);
};

User.methods.setConfirmationToken = function() {
  this.confirmationToken = this.generateJWT();
};

User.methods.isValidPassword = function(password) {
  return bcrypt.compareSync(password, this.passwordHash);
};

User.methods.withToken = function() {
  return {
    username: this.username,
    email: this.email,
    confirmed: this.confirmed,
    token: this.generateJWT()
  };
};

User.methods.generateJWT = function() {
  return jwt.sign(
    {
      email: this.email,
      username: this.username,
      confirmed: this.confirmed,
      userId: this._id
    },
    process.env.JWT_SECRET
  );
};

User.methods.generateConfirmationUrl = function () {
  return `${process.env.SERVER_API}/confirmation/${this.confirmationToken}`;
};
User.methods.setResetPasswordToken = function () {
  this.resetPasswordToken = this.generateJWT();
};

User.methods.generateResetPasswordUrl = function () {
  return `${process.env.HOST}/reset_password/${this.resetPasswordToken}`;
};

export default mongoose.model("User", User);
