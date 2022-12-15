const mongoose = require('mongoose')

const CartSchema= mongoose.Schema({
    
    prodId:{
        type:String,
        required:true,
    },
    userMail:{
        type:String,
        required:true,
    },
    count:{
        type:Number,
        default:1
    },
    data:{
        type:Array,
        require:true
    }

})


const CartModel= mongoose.model("Cart", CartSchema)
module.exports= CartModel