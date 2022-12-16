const express = require('express')
const  CartModel= require('../models/cart.model')
const app = express.Router()
const productModel= require('../models/Product.model')


app.post('/',async (req,res) => {
     const {userMail,prodId}= req.body    
     try{
         const prod= await CartModel.find({prodId,userMail})
       const proddetails= await productModel.findById({_id:prodId})
         if(prod.length>0){
             const updatedProd= await CartModel.updateOne({prodId,userMail},{$inc:{"count":1}},{new:true})
             return res.send(updatedProd)
            }else{
                const newProd= await CartModel.create({prodId,userMail,data:proddetails})
                return res.send(newProd)
            }
        }catch(err){
            res.send(err.message)
        }
})


app.post('/dec',async (req,res) => {    
    const {userMail,prodId}= req.body   
    try{
        const prod= await CartModel.find({prodId,userMail})
      
        if(prod.length>0){
            const updatedProd= await CartModel.updateOne({prodId,userMail},{$inc:{"count":-1}},{new:true})
            return res.send(updatedProd)
           }else{
               const newProd= await CartModel.create({prodId,userMail})
               return res.send(newProd)
           }
       }catch(err){
           res.send(err.message)
       }
})

app.get("/" ,async(req,res)=>{
    const {userMail} = req.body
    
    try{
        const prod= await CartModel.find({userMail})      
        if(prod.length>0){
            
            res.send(prod)           
        }
       }catch(err){
           res.send(err.message)
       }
})


app.delete("/:_id", async (req,res)=>{  
    let {_id}= req.params
    try{
        const rest= await  CartModel.findByIdAndDelete({_id})
        return res.send("Product deleted Successfullly")
    }catch(err){
        return res.send(err.message)

    }        
})


module.exports= app