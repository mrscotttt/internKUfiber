const uploadFile = require("../middleware/upload");
fs = require('fs');

const upload = async (req, res) => {

  //const payload=req.body
  //const station = new Station(payload)
  //await station.save()
  //res.status(201).end()

  try {
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Please upload a file!" });
    }

    res.status(200).send({
      message: "Uploaded the file successfully: " + req.file.originalname,
    });
  } catch (err) {
    res.status(500).send({
      message: ` Could not upload the file: ${req.file.originalname}. ${err}`,
    });
  }
  
};

const getListFiles = (req, res) => {
  const directoryPath = "C:/Users/user/Desktop/fiberproj/server/uploads/";
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Unable to scan files!",
      });
    }

    let fileInfos = [];

    files.forEach((file) => {
      fileInfos.push({
        name: file,
        //url: baseUrl + file,
        url: "http://localhost:8888/files/"+file,
        //idm: payload,
      });
    });

    res.status(200).send(fileInfos);
  });
};

const download = (req, res) => {
  const fileName = req.params.name;
  //const directoryPath = "../img/";
  const directoryPath = "C:/Users/user/Desktop/fiberproj/server/uploads/"

  res.download(directoryPath + fileName, fileName, (err) => {
    if (err) {
      res.status(500).send({
        message: "Could not download the file. " + err,
      });
    }
  });
};

module.exports = {
  upload,
  getListFiles,
  download,
};