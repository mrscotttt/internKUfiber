const util = require("util");
const multer = require("multer");
const { stringify } = require("querystring");
const maxSize = 2 * 1024 * 1024;
fs = require('fs');

let storage = multer.diskStorage({
  
  destination: (req, file, cb) => {
    cb(null, "C:/Users/user/Desktop/fiberproj/server/uploads/");
  },
  filename: (req, file, cb) => {
    //console.log(file.originalname);
    cb(null, file.originalname)
  },


});



let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single("file");



let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;