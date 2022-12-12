require("dotenv").config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080
const connect= require('./config/db');
const SignUpRoute=  require("./Routes/Auth.Route")



// app.use("/signup",SignUpRoute)
app.use("/auth",SignUpRoute)





app.get("/", (req, res)  => {
res.send("4000")
} )





app.listen(PORT, async() => {
try{
   await connect();
}catch(e){
    console.log("e",e)
}
console.log("localhost listening on port")
})