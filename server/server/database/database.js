const mongoose = require('mongoose');

const Connect = async () => {
    //mongodb://mongo:27017/expressmongo
    //mongoose.connect('mongodb://localhost:27017/data', {
    mongoose.connect('mongodb://mongo:27017/expressmongo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    })

    mongoose.connection.on('error', err => {
    console.error('MongoDB error', err)
    })
}

module.exports = Connect