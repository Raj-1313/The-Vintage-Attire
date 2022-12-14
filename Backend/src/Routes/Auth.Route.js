const Auth_Sign = require('../models/Auth.model')
const express= require('express')
const jwt= require('jsonwebtoken');
const App= express.Router()

App.use(express.json())

App.post("/signup", async (req,res)=>{
const {email, password,name,country,mobile} = req.body
try{
    const userEmail= await Auth_Sign.findOne({email})
    if(userEmail){
        res.send("User already exists")
    }else{
        const User=await Auth_Sign.create({email,password,name,country,mobile})
                if(User){
                  
                    // let decode = jwt.decode(token, process.env.key);                    
                    res.status(201).send("successFull")
                }
    }
}catch(e){
    res.send("404 error Url is not working")
}

})

App.post("/login", async (req,res)=>{
const {email, password} = req.body
try{
    const userEmail= await Auth_Sign.findOne({email})
    
    if(userEmail){
       if(password== userEmail.password){
        let token= jwt.sign({email,password,name,country,mobile}, process.env.key )
           res.status(201).send(token)
           
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


