//const http=require('http')

//console.log(routes.someText)
const express=require("express")
const bodyParser=require("body-parser")
const app=express()
const adminRoutes=require('./routes/admin')
const shopRoutes=require("./routes/shop")
app.use(bodyParser.urlencoded({extended:false},{extends:false}))
app.use(adminRoutes)
// app.use("/",(req,res,next)=>{
//     console.log('middleware')
//     next()
//})
app.use(shopRoutes)
app.use((req,res,next)=>{
    res.status(404).send("<h1>page not found</h1>")
})



app.listen(3310)