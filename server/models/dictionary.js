import mongoose from "mongoose";

const { Schema } = mongoose;

const Dictionary = new Schema({
    text: String,
    translation: String,
    repeatStage: Number,
    done: Boolean
    //userId: { type: Schema.Types.ObjectId, ref: "User"}
});

export default mongoose.model("Dictionary", Dictionary);