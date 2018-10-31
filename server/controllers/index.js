import axios from "axios";
require("dotenv").config();
import Dictionary from "../models/dictionary";
import User from "../models/user";
import { sendConfirmationEmail, sendResetPasswordEmail } from "../mailer";


/* https://translate.yandex.net/api/v1.5/tr.json/translate
? [key=<API-ключ>]
& [text=<переводимый текст>]
& [lang=<направление перевода>]
& [format=<формат текста>]
& [options=<опции перевода>]
& [callback=<имя callback-функции>] */

//const stageMedium = [25, 1200, 28800, 86400, 1209600, 4838400, 31536000];

const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${
  process.env.YANDEX_API_KEY
}`;

//TODO: set right time, because of defference between client and server
export function translate(req, res) {
  const reqText = req.body.text.toLowerCase();

  Dictionary.findOne({ userId: req.body.user._id, text: reqText })
    .then(found => {
      if (found) {
        res.send(found);
      } else {
        axios
          .post(`${url}&lang=en-ru&text=${req.body.text}`)
          .then(response => {
            const word = new Dictionary({
              text: reqText,
              translation: response.data.text[0],
              addTime: new Date(),
              lastRepeat: new Date(),
              repeatStage: 0,
              isRepeatTime: false,
              userId: req.body.user._id
            });
            word.save().then(w => res.send(w));
          })
          .catch(err => console.log("error post yandex/api", err));
      }
    })
    .catch(err => console.log("Error DB translate", err));
}

//get last 50 words
export function getFifty(req, res) {
  Dictionary.find({ userId: req.body.user._id })
    .limit(50)
    .then(dictionary => {
      res.send(dictionary);
    })
    .catch(err => console.log("error DB getFifty", err));
}

//get all dictionary
export function getDictionary(req, res) {
  
  Dictionary.find({ userId: req.body.user._id })
    .then(dictionary => {
      res.send(dictionary);
    })
    .catch(err => console.log("error DB getDictionary", err));
}

export function removeText(req, res) {
  Dictionary.findOneAndRemove({
    userId: req.body.user._id,
    _id: req.body.id
  })
    .then(removedElement => {
      res.send(removedElement);
    })
    .catch(err => console.log("error DB removeText", err));
}

export function getWordsToRepeat(req, res) {
  // .then(() => {
  Dictionary.find({ userId: req.body.user._id, isRepeatTime: true })
    .then(repeatWords => {
      //console.log(repeatWords)
      if (repeatWords.length) return res.send(repeatWords);
      return res.send([]);
    })
    .catch(err => console.log("error DB getwordsToRepeat", err));
  //})
  // .catch(err => console.log("error DB wordsToRepeat", err));
}

export function checkWordsToRepeat(req, res) {
  Dictionary.find({ userId: req.body.user._id })
    .then(words => {
      for (let i = 0; i < words.length; i++) {
        words[i].checkRepeatTime().save();
      }
      res.send(words);
    })
    .catch(err => console.log("error DB checkWordsToRepeat", err));
}

//after repeat we find word by id, set lastRepeat = new Date(),
// stage += 1, isRepeatTime = false
export function nextStage(req, res) {
  Dictionary.findOne({ userId: req.body.user.userId, _id: req.body._id })
    .then(word => {
      if (req.body.success) word.stage += 1;

      word.lastRepeat = new Date();
      word.isRepeatTime = false;
      word.save().then(w => {
        res.send(w);
      });
    })
    .catch(err => console.log("error DB nextStage", err));
}

export function signup(req, res) {
  const { email, password, username } = req.body;

  const user = new User({ email, username });
  user.setPassword(password);
  user.setConfirmationToken()
  sendConfirmationEmail(user)
  user
    .save()
    .then(u => {
      const userWithToken = u.withToken();
      res.send(...userWithToken);
    })
    .catch(err => console.log("error DB signup", err));
}

export function fetchCurrentUser(req, res) {
  const user = req.body.user;

  res.send({
    email: user.email,
    username: user.username,
    confirmed: user.confirmed,
    token: user.generateJWT(),
    userId: user._id
  });
}

export function login(req, res) {
  const { email, password } = req.body;

  User.findOne({ email: email }).then(user => {
    if (user && user.isValidPassword(password)) {
      const userWithToken = user.withToken();
      res.send({ ...userWithToken });
    } else {
      res.status(401).send({ error: "Invalid credentials" });
    }
  });
}

export function confirmation(req, res) {
 console.log(req)
}


