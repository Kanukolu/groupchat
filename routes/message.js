const express = require('express')
const fs=require('fs');


const router = express.Router();

router.get('/', (req, res, next) => {
    
    fs.readFile('datas.txt',(err,data)=>{
        if(err){
            console.log(err);
            data="cannot find any chat"
        }
        res.send(`${data}<form action="/" method="POST" onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
        <input type="text" id="message" name="message" placeholder="message">
        <input type="hidden" id="username" name="username">
        <button type="submit">SEND</button>
        </form>`);
    });

})

router.post('/',(req,res,next)=>{
   
    console.log(req.body.message);

    fs.writeFile('datas.txt',`${req.body.username}:${req.body.message} `,{flag:'a'},(err)=>{    //flag:'a' is for append
        err ? console.log(err) : res.redirect('/');
    })

    

})

module.exports=router;