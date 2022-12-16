const mongoose = require('mongoose')
const express = require('express')
const productModel= require('../models/Product.model')
const app = express.Router()
const  CartModel= require('../models/cart.model')
const Auth_Sign = require('../models/Auth.model')

app.get("/",async (req,res)=>{   
        let products= await productModel.find()    
    res.send(products)
    })

app.get("/women",async (req,res)=>{      
      
let product= await productModel.find({"category":"women"})
  return  res.send(product)
})

app.get("/women/filter",async (req,res)=>{    
    let {type,id,sort}= req.query
    if(type && id && sort){
        let product= await productModel.find({category:"women"})  
        let data=  product.filter((el)=> el._id==id )
        res.send(data)

}else if(type && sort){
    let product= await productModel.find({category:"women",type})    
    switch(sort){
          case "asc":{
              let sortedData= product.sort((a,b)=>a.name-b.name)
             return  res.send(sortedData)
          }
          case "desc":{            
              let sortedData= product.sort((a,b)=>b.name-a.name)
             return  res.send(sortedData)
          }
          case "inc":{
              let sortedData= product.sort((a,b)=>a.discounted_price-b.discounted_price)
             return  res.send(sortedData)  
          }
          case "dec":{            
              let sortedData= product.sort((a,b)=>b.discounted_price-a.discounted_price)
             return  res.send(sortedData)
          }
  }

}else if(sort && id){
    let product= await productModel.find({category:"women"})  
    let data=  product.filter((el)=> el._id==id )
    res.send(data)

}else if(type && id){
    let product= await productModel.find({category:"women",type,_id:id})  
    res.send(product)
}
else{
    if(type){
        let product= await productModel.find({category:"women",type})  
          res.send(product)
    }else if(sort){
        let product= await productModel.find({category:"women"})    
        switch(sort){
              case "asc":{
                  let sortedData= product.sort((a,b)=>a.name-b.name)
                 return  res.send(sortedData)
              }
              case "desc":{            
                  let sortedData= product.sort((a,b)=>b.name-a.name)
                 return  res.send(sortedData)
              }
              case "inc":{
                  let sortedData= product.sort((a,b)=>a.discounted_price-b.discounted_price)
                 return  res.send(sortedData)  
              }
              case "dec":{            
                  let sortedData= product.sort((a,b)=>b.discounted_price-a.discounted_price)
                 return  res.send(sortedData)
              }
      }
    }else if(id){
        let product= await productModel.find({category:"women",_id:id})  
     return res.send(product)
    }
}


})

app.get("/women/:id",async (req,res)=>{
    // const token= req.headers.authorization
    const id= req.params.id
    console.log(id)
    // const varification=jwt.verify(token,process.env.key)
 let product= await productModel.findById(id)
    res.send(product)
})



app.get("/home",async (req,res)=>{      
      
let product= await productModel.find({"category":"home"})
  return  res.send(product)
})

app.get("/home/filter",async (req,res)=>{    
    let {type,id,sort}= req.query
    if(type && id && sort){
        let product= await productModel.find({category:"home"})  
        let data=  product.filter((el)=> el._id==id )
        res.send(data)

}else if(type && sort){
    let product= await productModel.find({category:"home",type})    
    switch(sort){
          case "asc":{
              let sortedData= product.sort((a,b)=>a.name-b.name)
             return  res.send(sortedData)
          }
          case "desc":{            
              let sortedData= product.sort((a,b)=>b.name-a.name)
             return  res.send(sortedData)
          }
          case "inc":{
              let sortedData= product.sort((a,b)=>a.discounted_price-b.discounted_price)
             return  res.send(sortedData)  
          }
          case "dec":{            
              let sortedData= product.sort((a,b)=>b.discounted_price-a.discounted_price)
             return  res.send(sortedData)
          }
  }

}else if(sort && id){
    let product= await productModel.find({category:"home"})  
    let data=  product.filter((el)=> el._id==id )
    res.send(data)

}else if(type && id){
    let product= await productModel.find({category:"home",type,_id:id})  
    res.send(product)
}
else{
    if(type){
        let product= await productModel.find({category:"home",type})  
          res.send(product)
    }else if(sort){
        let product= await productModel.find({category:"home"})    
        switch(sort){
              case "asc":{
                  let sortedData= product.sort((a,b)=>a.name-b.name)
                 return  res.send(sortedData)
              }
              case "desc":{            
                  let sortedData= product.sort((a,b)=>b.name-a.name)
                 return  res.send(sortedData)
              }
              case "inc":{
                  let sortedData= product.sort((a,b)=>a.discounted_price-b.discounted_price)
                 return  res.send(sortedData)  
              }
              case "dec":{            
                  let sortedData= product.sort((a,b)=>b.discounted_price-a.discounted_price)
                 return  res.send(sortedData)
              }
      }
    }else if(id){
        let product= await productModel.find({category:"home",_id:id})  
     return res.send(product)
    }
}


})

app.get("/home/:id",async (req,res)=>{
    // const token= req.headers.authorization
    const id= req.params.id
    console.log(id)
    // const varification=jwt.verify(token,process.env.key)
 let product= await productModel.findById(id)
    res.send(product)
})





app.get("/men",async (req,res)=>{        
let product= await productModel.find({category:"men"})
    res.send(product)
})

app.get("/men/filter",async (req,res)=>{    
    let {type,id,sort}= req.query
    if(type && id && sort){
        let product= await productModel.find({category:"men"})  
        let data=  product.filter((el)=> el._id==id )
        res.send(data)

}else if(type && sort){
    let product= await productModel.find({category:"men",type})    
    switch(sort){
          case "asc":{
              let sortedData= product.sort((a,b)=>a.name-b.name)
             return  res.send(sortedData)
          }
          case "desc":{            
              let sortedData= product.sort((a,b)=>b.name-a.name)
             return  res.send(sortedData)
          }
          case "inc":{
              let sortedData= product.sort((a,b)=>a.discounted_price-b.discounted_price)
             return  res.send(sortedData)  
          }
          case "dec":{            
              let sortedData= product.sort((a,b)=>b.discounted_price-a.discounted_price)
             return  res.send(sortedData)
          }
  }

}else if(sort && id){
    let product= await productModel.find({category:"men"})  
    let data=  product.filter((el)=> el._id==id )
    res.send(data)

}else if(type && id){
    let product= await productModel.find({category:"men",type,_id:id})  
    res.send(product)
}
else{
    if(type){
        let product= await productModel.find({category:"men",type})  
          res.send(product)
    }else if(sort){
        let product= await productModel.find({category:"men"})    
        switch(sort){
              case "asc":{
                  let sortedData= product.sort((a,b)=>a.name-b.name)
                 return  res.send(sortedData)
              }
              case "desc":{            
                  let sortedData= product.sort((a,b)=>b.name-a.name)
                 return  res.send(sortedData)
              }
              case "inc":{
                  let sortedData= product.sort((a,b)=>a.discounted_price-b.discounted_price)
                 return  res.send(sortedData)  
              }
              case "dec":{            
                  let sortedData= product.sort((a,b)=>b.discounted_price-a.discounted_price)
                 return  res.send(sortedData)
              }
      }
    }else if(id){
        let product= await productModel.find({category:"men",_id:id})  
     return res.send(product)
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
        let {type,id,sort}= req.query
        if(type && id && sort){
            let product= await productModel.find({category:"accessories"})  
            let data=  product.filter((el)=> el._id==id )
            res.send(data)
    
    }else if(type && sort){
        let product= await productModel.find({category:"accessories",type})    
        switch(sort){
              case "asc":{
                  let sortedData= product.sort((a,b)=>a.name-b.name)
                 return  res.send(sortedData)
              }
              case "desc":{            
                  let sortedData= product.sort((a,b)=>b.name-a.name)
                 return  res.send(sortedData)
              }
              case "inc":{
                  let sortedData= product.sort((a,b)=>a.discounted_price-b.discounted_price)
                 return  res.send(sortedData)  
              }
              case "dec":{            
                  let sortedData= product.sort((a,b)=>b.discounted_price-a.discounted_price)
                 return  res.send(sortedData)
              }
      }
    
    }else if(sort && id){
        let product= await productModel.find({category:"accessories"})  
        let data=  product.filter((el)=> el._id==id )
        res.send(data)
    
    }else if(type && id){
        let product= await productModel.find({category:"accessories",type,_id:id})  
        res.send(product)
    }
    else{
        if(type){
            let product= await productModel.find({category:"accessories",type})  
              res.send(product)
        }else if(sort){
            let product= await productModel.find({category:"accessories"})    
            switch(sort){
                  case "asc":{
                      let sortedData= product.sort((a,b)=>a.name-b.name)
                     return  res.send(sortedData)
                  }
                  case "desc":{            
                      let sortedData= product.sort((a,b)=>b.name-a.name)
                     return  res.send(sortedData)
                  }
                  case "inc":{
                      let sortedData= product.sort((a,b)=>a.discounted_price-b.discounted_price)
                     return  res.send(sortedData)  
                  }
                  case "dec":{            
                      let sortedData= product.sort((a,b)=>b.discounted_price-a.discounted_price)
                     return  res.send(sortedData)
                  }
          }
        }else if(id){
            let product= await productModel.find({category:"accessories",_id:id})  
         return res.send(product)
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
    let {type,id,sort}= req.query
    if(type && id && sort){
        let product= await productModel.find({category:"kids"})  
        let data=  product.filter((el)=> el._id==id )
        res.send(data)

}else if(type && sort){
    let product= await productModel.find({category:"kids",type})    
    switch(sort){
          case "asc":{
              let sortedData= product.sort((a,b)=>a.name-b.name)
             return  res.send(sortedData)
          }
          case "desc":{            
              let sortedData= product.sort((a,b)=>b.name-a.name)
             return  res.send(sortedData)
          }
          case "inc":{
              let sortedData= product.sort((a,b)=>a.discounted_price-b.discounted_price)
             return  res.send(sortedData)  
          }
          case "dec":{            
              let sortedData= product.sort((a,b)=>b.discounted_price-a.discounted_price)
             return  res.send(sortedData)
          }
  }

}else if(sort && id){
    let product= await productModel.find({category:"kids"})  
    let data=  product.filter((el)=> el._id==id )
    res.send(data)

}else if(type && id){
    let product= await productModel.find({category:"kids",type,_id:id})  
    res.send(product)
}
else{
    if(type){
        let product= await productModel.find({category:"kids",type}) 
          res.send(product)
    }else if(sort){
        let product= await productModel.find({category:"kids"})    
        switch(sort){
              case "asc":{
                  let sortedData= product.sort((a,b)=>a.name-b.name)
                 return  res.send(sortedData)
              }
              case "desc":{            
                  let sortedData= product.sort((a,b)=>b.name-a.name)
                 return  res.send(sortedData)
              }
              case "inc":{
                  let sortedData= product.sort((a,b)=>a.discounted_price-b.discounted_price)
                 return  res.send(sortedData)  
              }
              case "dec":{            
                  let sortedData= product.sort((a,b)=>b.discounted_price-a.discounted_price)
                 return  res.send(sortedData)
              }
      }
    }else if(id){
        let product= await productModel.find({category:"kids",_id:id})  
     return res.send(product)
    }
}

})
    
    app.get("/kids/:id",async (req,res)=>{
        const id= req.params.id
     let product= await productModel.findById(id)
        res.send(product)
    })
    



// products Admin
    
app.get("/admin", async (req,res)=>{   
    try{
        const rest= await  productModel.find()
        return res.send(rest)
    }catch(err){
        return res.send(err.message)
    }        
})

app.post("/admin", async (req,res)=>{
    const data= req.body
    try{
        const rest= await  productModel.create(data)
        return res.send("New Product created")
    }catch(err){
        return res.send(err.message)

    }
        
})

app.patch("/admin", async (req,res)=>{
    const data= req.body
    const id= data._id
   
    try{
        const rest= await  productModel.findByIdAndUpdate({_id:id},data)
        return res.send("New Product created")
    }catch(err){
        return res.send(err.message)
    }
        })
        
app.delete("/admin/:id", async (req,res)=>{
    const id= req.params.id

    try{
        const rest= await  productModel.findByIdAndDelete({_id:id})
        return res.send("Product deleted successfully")
    }catch(err){
        return res.send(err.message)
    }        
})
    

// Cart Admin

app.get("/admin/cart", async (req,res)=>{   
    try{
        const rest= await  CartModel.find()
        return res.send(rest)
    }catch(err){
        return res.send(err.message)
    }
        })

app.patch("/admin/cart", async (req,res)=>{
    const data= req.body
    const id= data._id
    try{
        const rest= await  CartModel.findByIdAndUpdate({_id:id},data)
        return res.send("Cart Product changed")
    }catch(err){
        return res.send(err.message)
    }
        })
        
app.delete("/admin/cart/:id", async (req,res)=>{
    const id= req.params.id
console.log(id)
    try{
        const rest= await  CartModel.findByIdAndDelete({_id:id})
        return res.send("cart Item deleted successfully")
    }catch(err){
        return res.send(err.message)
    }        
})




// UserDetails Admin

app.get("/admin/User", async (req,res)=>{   
    try{
        const rest= await  Auth_Sign.find({category:"User"})
        return res.send(rest)
    }catch(err){
        return res.send(err.message)
    }
        })
app.post("/admin/User", async (req,res)=>{   
    const {mobile,email,password,name,country}= req.body
    try{
        const rest= await  Auth_Sign.create({mobile,email,password,name,country})
        return res.send(rest)
    }catch(err){
        return res.send(err.message)
    }
        })

app.patch("/admin/User", async (req,res)=>{
    const data= req.body
    const id= data._id
   
    try{
        const rest= await  Auth_Sign.findByIdAndUpdate({_id:id},data)
        return res.send(rest)
    }catch(err){
        return res.send(err.message)
    }
        })
 
app.delete("/admin/User/:id", async (req,res)=>{
    const id= req.params.id

    try{
        const rest= await  Auth_Sign.findByIdAndDelete({_id:id})
        return res.send("Product deleted successfully")
    }catch(err){
        return res.send(err.message)
    }        
})
    



module.exports= app
