require("dotenv").config();

import express from 'express'

const app = express();

app.get("/", (req, res) => {
    res.send("Hi from server")
} )

app.listen(process.env.PORT, () => console.log("server running"))