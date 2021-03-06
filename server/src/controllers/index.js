
import axios from "axios";
import Dictionary from "../models/dictionary";
import User from "../models/user";
import { sendConfirmationEmail, sendResetPasswordEmail } from "../mailer";
import fs from "fs";
require('dotenv').config()

const urlTranslate = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${
  process.env.YANDEX_API_KEY
}`;
const urlDetect = `https://translate.yandex.net/api/v1.5/tr.json/detect?key=${
  process.env.YANDEX_API_KEY
}`;
const HOST = process.env.NODE_ENV === "development" ? 'http://localhost:8000' : "https://repemorizer.herokuapp.com"

export async function translateText(req, res) {

  const reqText = req.body.text.toLowerCase();
  let from = req.body.lang.from;
  const to = req.body.lang.to;

  const resDetectLang = await axios.get(
    `${urlDetect}&text=${encodeURI(reqText)}$hint=${from}`
    ).catch(error=> console.log(error))

  const { code, lang } = resDetectLang.data;

  if (code === 200) {
    from = lang;
  }

  Dictionary.findOne({
    userId: req.body.user._id,
    text: reqText,
    langFrom: from,
    langTo: to
  })
    .then(found => {
      //check if the word is already in dictionary
      if (found) {
        res.send(found);
      } else {
        //if not, create new word
        axios
          .post(`${urlTranslate}&lang=${from}-${to}&text=${encodeURI(reqText)}`)
          .then(response => {
            const word = new Dictionary({
              text: reqText,
              langFrom: from,
              langTo: to,
              translation: response.data.text[0],
              addTime: new Date(),
              lastRepeat: new Date(),
              stage: 0,
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
  Dictionary.find({ userId: req.body.user._id, isRepeatTime: true })
    .then(repeatWords => {
      if (repeatWords.length) return res.send(repeatWords);
      return res.send([]);
    })
    .catch(err => console.log("error DB getwordsToRepeat", err));
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

export function nextStage(req, res) {
  Dictionary.findOne({ userId: req.body.user._id, _id: req.body._id })
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
  user.setConfirmationToken();
  user.setResetPasswordToken();

  user.save((err, u) => {
    if (err) {
      if (err.name === "MongoError" && err.code === 11000) {
        let errType = err.errmsg.match(/email|username/);
        const mess = `${errType[0].charAt(0).toUpperCase() +
          errType[0].slice(1)} isn't unique. Try another one.`;

        res.status(203).send({ message: mess });
      }
    } else {
      sendConfirmationEmail(user);
      const userWithToken = u.withToken();
      res.send({
        ...userWithToken,
        message: "Confirmation email has been send. Check your mailbox.",
        success: true
      });
    }
  });
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
      res.send({ ...userWithToken, message: "Successful!", success: true });
    } else {
      res
        .status(203)
        .send({ message: "Invalid login or password", success: false });
    }
  });
}

export function confirmation(req, res) {
  const { token } = req.params;
  User.findOneAndUpdate(
    { confirmationToken: token },
    { confirmationToken: "", confirmed: true }
  ).then(user => {
    if (user) {
      res.redirect(`${HOST}/confirmation`);
    } else {
      res.status(401).send({ message: "Invalid confirmation", success: false });
    }
  });
}
export function forgotPassword(req, res) {
  const { email } = req.body;
  User.findOne({ email: email }).then(user => {
    if (user) {
      sendResetPasswordEmail(user);
      res.send({
        message: "Confirmation email has been send. Check your mailbox.",
        success: true
      });
    } else {
      res
        .status(203)
        .send({ message: "There is no user with such email", success: false });
    }
  });
}

export function resetPassword(req, res) {
  const { token, password } = req.body;

  User.findOne({ resetPasswordToken: token }).then(user => {
    if (user) {
      user.setPassword(password);
      user.setResetPasswordToken();
      user.save().then(u => {
        const userWithToken = u.withToken();
        res.send({
          ...userWithToken,
          message: "Password has changed",
          success: true
        });
      });
    } else {
      res
        .status(203)
        .send({ message: "Invalid confirmation token", success: false });
    }
  });
}

export function errorHandler(req, res) {
  const { config, response } = req.body.error;
  console.log("response", response);
  const url = config.url;
  const headers = JSON.stringify(config.headers);
  const data = config.data;
  let status;
  if (response) {
    status = `${response.status} - ${response.statusText}`;
  }

  fs.appendFile(
    "errorLog.txt",
    `Date: ${new Date().toLocaleString()}
    ${url}
    ${status}
    ${data}
    ${headers}
    
    `,
    err => {
      if (err) console.log(err);
    }
  );
  res.send({ error: "wrote" });
}
