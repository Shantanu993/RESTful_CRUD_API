const express = require('express')
const mongoose = require('mongoose')
const Products = require('./models/productModels')

const app = express()
app.use(express.json())

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


mongoose.connect('mongodb+srv://Shantanu993:12345678Admin@cluster0.rdogfmh.mongodb.net/Node-API?retryWrites=true&w=majority')
  .then(() => {
    console.log('DB Connected!')
    app.listen(3000, () => {
      console.log('Server is running on port 3000')
    })
  })
  .catch((err) => {
    console.log("Error");
  })