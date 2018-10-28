require("dotenv").config();
import mongoose from 'mongoose'
import cors from 'cors'
import express from 'express'
import bodyParser from 'body-parser'
import * as route from './controllers'

const app = express();

mongoose.connect( process.env.MONGODB_URI, { useNewUrlParser: true
} );

app.use(cors())
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.post('/api/translate', route.translate)
app.get('/api/get_dictionary', route.getDictionary)



app.get("/", (req, res) => {
    res.send("Hi from server") 
} )

app.listen(process.env.PORT, () => console.log("server running"))