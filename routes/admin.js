const express=require("express")
const router=express.Router()
const rootdir=require("../util/path")
router.get("/add-product",(req,res,next)=>{
    //console.log('in 2middleware')
    res.send('<form action="/product" method="POST"><input type="text" name="add product"><input type="text" name="add"><button type="submit">add product</button></input></input></form>')
})
router.post("/product",(req,res,next)=>{
    console.log(req.body)
    res.redirect("/")
})

module.exports=router