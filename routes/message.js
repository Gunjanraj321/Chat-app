const express = require('express')
const fs=require('fs');
const { route } = require('./login');

const router = express.Router();

router.get('/',(req,res)=>{
    fs.readFile('username.txt',(err,data)=>{
        if(err){
            console.log('file not exist')
            data='no chat exists'
        }
        res.send(`${data}<form onsubmit="document.getElementById('username').value=localStorage.getItem('username')" action="/" method="post"><input type="text" name="message" id="message" placeholder="Enter your message..."><input type="hidden" name="username" id="username"> <button type="submit">send</button> </form> `)
    })
})

router.post('/',(req,res)=>{
    
    fs.writeFile('username.txt',`${req.body.username}:${req.body.message}`,{flag:'a'},(err)=>console.log(err),res.redirect('/'));
})

module.exports = router;
