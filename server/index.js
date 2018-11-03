import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import * as route from "./controllers";
import authenticate from "./utils/authenticate";
import path from 'path'
dotenv.config();
const app = express();
app.use(express.static(path.resolve(__dirname +'/assets')))
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
); 

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post("/api/translate",authenticate, route.translate);
app.get("/api/get_fifty", authenticate, route.getFifty);
app.get("/api/get_dictionary",authenticate,  route.getDictionary);
app.post("/api/remove_text",authenticate,  route.removeText);
app.get("/api/get_words_to_repeat",authenticate,  route.getWordsToRepeat);
app.patch("/api/check_words_to_repeat",authenticate,  route.checkWordsToRepeat);
app.patch("/api/next_stage",authenticate,  route.nextStage);
app.post("/api/signup", route.signup);
app.get("/api/fetch_current_user", authenticate, route.fetchCurrentUser);
app.post("/api/login", route.login);
app.get('/api/confirmation/:token', route.confirmation)
app.post('/api/forgot_password', route.forgotPassword)
app.post('/api/reset_password', route.resetPassword)


app.get("/*", (req, res) => {
  
  res.sendFile(path.join(__dirname, '/assets/index.html'))
});
 
  
 app.listen(process.env.PORT, () => console.log("server running"));
 module.exports = app;