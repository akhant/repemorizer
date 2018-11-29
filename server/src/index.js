import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import * as route from "./controllers";
import authenticate from "./utils/authenticate";
import path from "path";

const app = express();
app.use(express.static(path.resolve(__dirname + "/build_client")));
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.post("/api/translate", authenticate, route.translateText);
app.get("/api/get_fifty", authenticate, route.getFifty);
app.get("/api/get_dictionary", authenticate, route.getDictionary);
app.post("/api/remove_text", authenticate, route.removeText);
app.get("/api/get_words_to_repeat", authenticate, route.getWordsToRepeat);
app.patch("/api/check_words_to_repeat", authenticate, route.checkWordsToRepeat);
app.patch("/api/next_stage", authenticate, route.nextStage);
app.post("/api/signup", route.signup);
app.get("/api/fetch_current_user", authenticate, route.fetchCurrentUser);
app.post("/api/login", route.login);
app.get("/api/confirmation/:token", route.confirmation);
app.post("/api/forgot_password", route.forgotPassword);
app.post("/api/reset_password", route.resetPassword);
app.post("/api/error", route.errorHandler);

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname + "/build_client/index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("server running"));
module.exports = app;
