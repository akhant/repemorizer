import axios from "axios";
require("dotenv").config();
import Dictionary from "../models/dictionary";
import {STAGE} from '../constants'
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
  Dictionary.findOne({ text: reqText })
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
              isRepeatTime: false
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
  Dictionary.find()
    .limit(50)
    .then(dictionary => {
      res.send(dictionary);
    })
    .catch(err => console.log("error DB getFifty", err));
}

//get all dictionary
export function getDictionary(req, res) {
  Dictionary.find()
    .limit(50)
    .then(dictionary => {
      res.send(dictionary);
    })
    .catch(err => console.log("error DB getDictionary", err));
}

export function removeText(req, res) {
  Dictionary.findOneAndRemove({ _id: req.body.id })
    .then(removedElement => {
      res.send(removedElement);
    })
    .catch(err => console.log("error DB removeText", err));
}

export function getWordsToRepeat(req, res) {
  Dictionary.find({})
    .then(words => {
      const wLength = words.length;
      for (let i = 0; i < wLength; i++) {
        words[i].checkRepeatTime();
      }
    })
    .then(() => {
      Dictionary.find({ isRepeatTime: true })
        .then(repeatWords => {
          if (repeatWords.length) return res.send(repeatWords);
          return res.send("There is no words to repeat");
        })
        .catch(err => console.log("error DB wordsToRepeat", err));
    })
    .catch(err => console.log("error DB wordsToRepeat", err));
}

//after repeat we find word by id, set lastRepeat = new Date(),
// stage += 1, isRepeatTime = false