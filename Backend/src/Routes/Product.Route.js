const mongoose = require('mongoose')
const express = require('express')
const productModel= require('../models/Product.model')
const app = express.Router()

app.get("/",async (req,res)=>{    
        let products= await productModel.find()    
    res.send(products)
})


app.get("/women",async (req,res)=>{        
let product= await productModel.find({"category":"women"})
    res.send(product)
})

app.get("/women/filter",async (req,res)=>{    
    let {type,id}= req.query

    if(type){
    let product= await productModel.find({category:"women",type})
    if(id){
let data=  product.filter((el)=> el._id==id )
        res.send(data)
    }else{
        res.send(product)
    }
}
})


app.get("/women/:id",async (req,res)=>{
    const id= req.params.id
 let product= await productModel.findById(id)
    res.send(product)
})




app.get("/men",async (req,res)=>{        
let product= await productModel.find({category:"men"})
    res.send(product)
})

app.get("/men/filter",async (req,res)=>{    
    let {type,id}= req.query

    if(type){
    let product= await productModel.find({category:"men",type})
    if(id){
let data=  product.filter((el)=> el._id==id )
        res.send(data)
    }else{
        res.send(product)
    }
}
})
app.get("/men/:id",async (req,res)=>{
    const id= req.params.id
 let product= await productModel.findById(id)
    res.send(product)
})






app.get("/accessories",async (req,res)=>{        
    let product= await productModel.find({category:"accessories"})
        res.send(product)
    })
    
    app.get("/accessories/filter",async (req,res)=>{    
        let {type,id}= req.query
    
        if(type){
        let product= await productModel.find({category:"accessories",type})
        if(id){
    let data=  product.filter((el)=> el._id==id )
            res.send(data)
        }else{
            res.send(product)
        }
    }
    })
    app.get("/accessories/:id",async (req,res)=>{
        const id= req.params.id
     let product= await productModel.findById(id)
        res.send(product)
    })
    
    
    
    
    app.get("/kids",async (req,res)=>{        
    let product= await productModel.find({category:"kids_boy"})
        res.send(product)
    })
    
    app.get("/kids/filter",async (req,res)=>{    
        let {type,id}= req.query
    
        if(type){
        let product= await productModel.find({category:"kids",type})
        if(id){
    let data=  product.filter((el)=> el._id==id )
            res.send(data)
        }else{
            res.send(product)
        }
    }
    })
    app.get("/kids/:id",async (req,res)=>{
        const id= req.params.id
     let product= await productModel.findById(id)
        res.send(product)
    })
    
    


module.exports= app
