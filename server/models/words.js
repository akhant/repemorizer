import mongoose from "mongoose";

const { Schema } = mongoose;

const User = new Schema({
  email: String,
  name: String,
  hashPassword: String
});

export default mongoose.model("Words", User);