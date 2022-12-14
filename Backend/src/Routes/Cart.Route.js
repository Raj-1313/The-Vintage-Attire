const express = require('express')
const  CartModel= require('../models/cart.model')
const app = express.Router()
const productModel= require('../models/Product.model')


app.post('/add',async (req,res) => {
     const {userMail,prodId}= req.body
    
     try{
         const prod= await CartModel.find({prodId,userMail})
       
         if(prod.length>0){
             const updatedProd= await CartModel.updateOne({prodId,userMail},{$inc:{"count":1}},{new:true})
             return res.send(updatedProd)
            }else{
                const newProd= await CartModel.create({prodId,userMail})
                return res.send(newProd)
            }
        }catch(err){
            res.send(err.message)
        }
})

// app.get("/get" ,async(req,res)=>{
    
// })


   


app.patch("/:id", async (req,res)=>{
    const data= req.body
    console.log(data)
    let id= req.params.id
    try{
        const rest= await  CartModel.findByIdAndUpdate({_id:id},data)
        return res.send("New Product created")
    }catch(err){
        return res.send(err.message)

    }
        
})



module.exports= app