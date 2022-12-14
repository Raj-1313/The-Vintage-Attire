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
    
    
app.post("/", async (req,res)=>{
    const data= req.body
    try{
        const res= await  productModel.create(data)
        return res.send("New Product created")
    }catch(err){
        return res.send(err.message)

    }
        
})

// app.patch("/", async (req,res)=>{
//     const data= req.body
//     const id= data._id
//     try{
//         const res= await  productModel.findByIdAndUpdate({_id:id},{data})
//         return res.send("New Product created")
//     }catch(err){
//         return res.send(err.message)

//     }
        
// })
app.delete("/", async (req,res)=>{
    const {id}= req.body
    try{
        const res= await  productModel.findByIdAndDelete({_id:id})
        return res.send("New Product created")
    }catch(err){
        return res.send(err.message)

    }
        
})



module.exports= app
