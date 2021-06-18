const mongoose = require('mongoose')
const Schema = mongoose.Schema

const stationSchema = new Schema({
  name: String,
})

const stationModel = mongoose.model('Station', stationSchema)
module.exports = stationModel