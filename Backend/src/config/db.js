const mongoose = require('mongoose');

const connect = async ()=>{
    mongoose.set('strictQuery', true)
    return mongoose.connect(process.env.db_url)
}

module.exports = connect;