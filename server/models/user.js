import mongoose from "mongoose";

const { Schema } = mongoose;

const User = new Schema({
  email: String,
  name: String,
  hashPassword: String,
  dictionary: Array,
  words: Array
});

export default mongoose.model("User", User);