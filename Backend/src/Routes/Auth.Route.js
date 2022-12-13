const Auth_Sign = require('../models/Auth.model')
const express= require('express')

const App= express.Router()

App.use(express.json())

App.post("/signup", async (req,res)=>{
const {email, password,name,country,role} = req.body
try{
    const userEmail= await Auth_Sign.findOne({email})
    if(userEmail){
        res.send("User already exists")
    }else{
        const User=await Auth_Sign.create({email,password,name,country,role})
        res.status(201).send("pappu pass ho gya")
    }
}catch(e){
    res.send("404 error")
}

})

App.post("/login", async (req,res)=>{
const {email, password} = req.body
try{
    const userEmail= await Auth_Sign.findOne({email})
    
    if(userEmail){
       if(password== userEmail.password){
           res.status(201).send("LoginSuccessful")
           
        }else{
            res.status(401).send("Credientials Error")
        }
    }else{
        res.status(401).send("Signup First")       
    }
}catch(e){
    res.send("404 error")
}
})

module.exports = App;


