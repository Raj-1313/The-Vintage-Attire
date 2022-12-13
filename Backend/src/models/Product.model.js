const mongoose = require('mongoose')


const productSchema= mongoose.Schema({
    name:{type:String,required:true},
    imgUrl:{type:String,required:true},
    price:{type:Number,required:true},
    discounted_price:{type:Number},
    description:{type:String,required:true},
    type:{type:String},
    brand:{type:String},
    // sizes:{type:String},
    category:{type:String,required:true,enum:["men","women","kids","girls","boy"]}
})


const productModel  = mongoose.model('product',productSchema)

module.exports = productModel;