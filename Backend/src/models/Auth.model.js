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
    },
    mobile:{
        type:Number,
        required:true,
    },
    category:{
            type:String,
            default:"User"
    }

})


const Auth_Sign= mongoose.model("SignUp", Auth)
module.exports= Auth_Sign