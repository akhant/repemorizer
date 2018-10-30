import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
require('dotenv').config()

const { Schema } = mongoose;

const User = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true
  },
  username: {
    type: String,
    required: true
  },
  passwordHash: { type: String, required: true },
  confirmed: { type: Boolean, default: false },
  confirmationToken: { type: String, default: "" }
});


User.methods.setPassword = function(password){
  console.log(password)
  this.passwordHash = bcrypt.hashSync(password, 10)
}

User.methods.setConfirmationToken = function(){
  this.confirmationToken = this.generateJWT()
}

User.methods.generateJWT = function (){
  return jwt.sign(
    {
      email: this.email,
      username: this.username,
      confirmed: this.confirmed
    },
    process.env.JWT_SECRET
  );
}
export default mongoose.model("User", User);
