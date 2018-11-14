import mongoose from "mongoose";
import { STAGE } from "../constants";
const { Schema } = mongoose;

const Dictionary = new Schema({
  text: String,
  langFrom: String,
  langTo: String,
  translation: String,
  stage: { type: Number, default: 0 },
  done: Boolean,
  addTime: Object,
  lastRepeat: Object,
  isRepeatTime: { type: Boolean, default: false },
  userId: { type: Schema.Types.ObjectId, ref: "User" }
});

Dictionary.methods.checkRepeatTime = function() {
  this.isRepeatTime =
    Date.now() - Date.parse(this.lastRepeat) > STAGE[this.stage] ? true : false;
  return this;
};

export default mongoose.model("Dictionary", Dictionary);
