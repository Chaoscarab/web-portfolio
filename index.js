require('dotenv').config()
const express = require('express')
const path = require('path')

const app = express()


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "apps")))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "apps", 'index.html'))   
})



const port = process.env.PORT
console.log(`listening on port ${port}`)
app.listen(port)