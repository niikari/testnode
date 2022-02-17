const express = require('express');
const bodyParser = require('body-parser');
const database = require('./db/db')
const cors = require("cors")

const app = express();
app.use(bodyParser.json())
app.use(cors())

const port = 3000;

app.get("/", (req, res) => {
    res.send("Testi")
})

app.get("/api/users", (req, res) => {

})

app.post("api/users", (req, res) => {

})

app.get("/api/rooms", (req, res) => {
    
})

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running on port ${port}`)
}) 