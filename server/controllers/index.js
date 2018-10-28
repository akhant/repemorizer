import axios from "axios";
require("dotenv").config();
import Dictionary from "../models/dictionary";

/* https://translate.yandex.net/api/v1.5/tr.json/translate
? [key=<API-ключ>]
& [text=<переводимый текст>]
& [lang=<направление перевода>]
& [format=<формат текста>]
& [options=<опции перевода>]
& [callback=<имя callback-функции>] */

const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${
  process.env.YANDEX_API_KEY
}`;

export function translate(req, res) {
    const reqText = req.body.text.toLowerCase()
  Dictionary.findOne({ text: reqText })
    .then(found => {
      if (found) {
        res.send(found);
      } else {
        axios.post(`${url}&lang=en-ru&text=${req.body.text}`).then(response => {
          const word = new Dictionary({
            text: reqText,
            translation: response.data.text[0]
          });
          word.save().then(w => res.send(w));
        });
      }
    })
    .catch(err => {
      console.log("ERROR", err);
    });
}

export function getDictionary(req, res) {
    Dictionary.find().then(dictionary => {
        
        res.send(dictionary)
    })
  }