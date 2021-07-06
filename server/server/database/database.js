const mongoose = require('mongoose');

const Connect = async () => {
    //mongodb://mongo:27017/expressmongo
    //mongoose.connect('mongodb://localhost:27017/data', {
    mongoose.connect("mongodb+srv://admin_ocs:kasetocs@cluster0.kfw9q.mongodb.net/data?retryWrites=true&w=majority", {
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
