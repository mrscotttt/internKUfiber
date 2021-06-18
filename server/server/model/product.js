const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  name: String,
  status: String,
  station1: String,
  station2: String,
  fibertype: String,
  distance: Number,
  core: Number,
  use_core: Number,
  notuse_core: Number,
  date: String,
  person: String,
  repair: String,
  anyelse: String,
})

const ProductModel = mongoose.model('Product', productSchema)
module.exports = ProductModel