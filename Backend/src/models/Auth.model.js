const mongoose = require('mongoose')

const Auth= mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    }

})


const Auth_Sign= mongoose.model("SignUp", Auth)
module.exports= Auth_Sign