const mongoose = require('mongoose');

const Connect = async () => {
    
    mongoose.connect('mongodb://localhost:27017/data', {
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