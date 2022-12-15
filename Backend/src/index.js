require("dotenv").config()
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080
const connect= require('./config/db');
const SignUpRoute=  require("./Routes/Auth.Route")
const ProdRoute=  require("./Routes/Product.Route")
const CartRoute=  require("./Routes/Cart.Route")
const cors= require("cors")

app.use(cors());
app.use(express.json())
// app.use("/signup",SignUpRoute)
app.use("/auth",SignUpRoute)
app.use("/product",ProdRoute)
app.use("/cart",CartRoute)


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