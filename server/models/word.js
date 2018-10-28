import mongoose from "mongoose";

const { Schema } = mongoose;

const Word = new Schema({
  text: String,
  translation: String
});

export default mongoose.model("Word", Word);