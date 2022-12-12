const mongoose = require('mongoose');

const connect = async ()=>{
    return mongoose.connect(process.env.db_url)
}

module.exports = connect;