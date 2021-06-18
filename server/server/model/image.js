const mongoose = require('mongoose')
const Schema = mongoose.Schema

const imageSchema = new Schema({
  imageid: String,
  name: String,
  url: String,
})

const imageModel = mongoose.model('Image', imageSchema)
module.exports = imageModel