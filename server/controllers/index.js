import axios from 'axios';
require("dotenv").config();


/* https://translate.yandex.net/api/v1.5/tr.json/translate
? [key=<API-ключ>]
& [text=<переводимый текст>]
& [lang=<направление перевода>]
& [format=<формат текста>]
& [options=<опции перевода>]
& [callback=<имя callback-функции>] */

const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${process.env.YANDEX_API_KEY}`

export function translate(req,res){
    axios.post(`${url}&lang=en-ru&text=${req.body.text}`).then(response => {
        
        res.send({text: response.data.text[0]})
    }).catch(err => {
        console.log("ERROR", err)
    })
    
}