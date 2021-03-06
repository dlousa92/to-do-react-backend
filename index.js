
const express = require('express')
const parser = require('body-parser')
const mongoose = require('./db/Item')
const cors = require('cors')
const Item = mongoose.model('Item')

const app = express()

app.use(parser.json())
app.use(cors())

app.get('/api/todo', (req, res) => {
  Item.find()
    .then((items) => {
      res.json(items)
    })
    .catch((err) => {
      console.log(err)
    })
})

app.listen(process.env.PORT || 8000)
