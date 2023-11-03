const express = require('express');

const router = express.Router();

router.get('/login',(req,res)=>{
    res.send('<form onsubmit="localStorage.setItem(`username`,document.getElementById(`username`).value)" action="/login" method="post"><input type="text" name="username" id="username" placeHolder="username"><button type="submit">login</button> </form>')
})

router.post('/login',(req,res)=>{
    console.log(req.body)
    res.redirect('/')
})

module.exports = router;