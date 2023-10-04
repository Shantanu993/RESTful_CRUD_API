const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello this is my about page!')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

mongoose.connect('mongodb+srv://Shantanu993:12345678Admin@cluster0.rdogfmh.mongodb.net/Node-API?retryWrites=true&w=majority')
  .then(() => console.log('DB Connected!'))
  .catch((err) => {
    console.log("Error");
  })