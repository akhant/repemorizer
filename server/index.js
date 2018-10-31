import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import * as route from "./controllers";
import authenticate from "./utils/authenticate";

dotenv.config();
const app = express();

mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true
  }
);

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post("/api/translate", route.translate);
app.get("/api/get_fifty", route.getFifty);
app.get("/api/get_dictionary", route.getDictionary);
app.post("/api/remove_text", route.removeText);
app.get("/api/get_words_to_repeat", route.getWordsToRepeat);
app.patch("/api/check_words_to_repeat", route.checkWordsToRepeat);
app.patch("/api/next_stage", route.nextStage);
app.post("/api/signup", route.signup);
app.get("/api/fetch_current_user", authenticate, route.fetchCurrentUser);
app.post("/api/login", route.login);

app.get("/", (req, res) => {
  res.send("Hi from server");
});

app.listen(process.env.PORT, () => console.log("server running"));
