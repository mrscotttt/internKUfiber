const mongoose = require('mongoose')
const Schema = mongoose.Schema

const repairSchema = new Schema({
  rdetale: String,
  rid: String,
  rdate: String,
  
  /*filename : String,
  contentType : String,
  imageBase64 : String,*/
})

const RepairModel = mongoose.model('Repair',repairSchema)
module.exports = RepairModel