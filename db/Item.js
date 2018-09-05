const mongoose = require('./connection.js')

const Item = new mongoose.Schema({
  text: String
})

mongoose.model('Item', Item)

module.exports = mongoose
