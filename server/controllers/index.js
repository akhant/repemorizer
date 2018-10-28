import axios from "axios";
require("dotenv").config();
import Word from "../models/word";

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
  Word.findOne({ text: req.body.text })
    .then(found => {
      if (found) {
        res.send(found);
      } else {
        axios.post(`${url}&lang=en-ru&text=${req.body.text}`).then(response => {
          const word = new Word({
            text: req.body.text,
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
