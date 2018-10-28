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

const stageHard = [25,120,600,3600,18000,86400,432000,2160000,10800000,64800000 ]
const stageMedium = [25, 1200, 28800, 86400, 1209600, 4838400, 31536000  ]


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
            translation: response.data.text[0],
            addedTime: new Date().toLocaleString()
          });
          word.save().then(w => res.send(w));
        });
      }
    })
    .catch(err => {
      console.log("ERROR", err);
    });
}

export function getFifty(req, res) {
    Dictionary.find().limit(50).then(dictionary => {
        
        res.send(dictionary)
    })
  }

  export function getDictionary(req, res) {
    Dictionary.find().limit(50).then(dictionary => {
        
        res.send(dictionary)
    })
  }

export function removeText(req, res){
    Dictionary.findOneAndRemove({ _id: req.body.id}).then(removedElement => {
        res.send(removedElement)
    })
}