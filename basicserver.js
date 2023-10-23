const express = require('express')
const mongoose = require('mongoose')
const Products = require('./models/productModels')
const [MONGO_URL] = require('dotenv').config()
const {readFileSync, writeFileSync} = require('fs')

const app = express()
app.use(express.json())

const newfile = writeFileSync('./sample.txt','utf-8', 'hello this is created using write file sync') 

mongoose.connect(MONGO_URL)
  .then(() => {
    console.log('DB Connected!')
    app.listen(3000, () => {
      console.log('Server is running on port 3000')
    })
  })
  .catch((err) => {
    console.error("Error in starting server:", err);
  });

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello this is my about page!')
})

app.post('/product', async(req, res) => {
  try {
    const product = await Products.create(req.body)
    res.status(200).json(product);
    
  } catch (error) {
    console.log(error.message);
  }
})

