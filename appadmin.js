const http=require('http')

//const http=require('http')
const path=require("path")

//console.log(routes.someText)
const express=require("express")
const bodyParser=require("body-parser")
const app=express()
const adminRoutes=require('./routes/admin')
const shopRoutes=require("./routes/shop")
app.use(bodyParser.urlencoded({extended:false},{extends:false}))
app.use(adminRoutes)
app.use(shopRoutes)
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,"views","404.html"))
})
app.listen(3310)