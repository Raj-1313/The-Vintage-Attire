const mongoose = require('mongoose')

const DeletedSchema= mongoose.Schema({
    User:{type:Array},
    Cart:{type:Array},
    Product:{type:Array} 

})


const DeleteModel= mongoose.model("delete", DeletedSchema)
module.exports= DeleteModel