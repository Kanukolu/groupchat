// const express=require("express")
// const router=express.Router()
// const path=require("path")
// const rootdir=require("../util/path")

// router.get("/",(req,res,next)=>{
//     //console.log('in')
//     res.sendFile(path.join(rootdir,"views","shop.html"))
// })

// module.exports=router
// const express = require('express');

// const path=require('path');

// const rootDir=require('../util/path')

// const router = express.Router();

// router.get('/', (req, res, next) => {
//   res.send('<h1>Hello from Express!</h1>');
//   res.sendFile(path.join(rootDir,'views','shop.html'));
// });

// module.exports = router;
const express = require('express');

const path=require('path');

const rootDir=require('../util/path')

const router = express.Router();

router.get('/', (req, res, next) => {
  //res.send('<h1>Hello from Express!</h1>');
  res.sendFile(path.join(rootDir,'views','shop.html'));
});

module.exports = router;