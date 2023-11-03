const express = require('express');
const bodyParser = require('body-parser');
const app=express();


const msgRouter = require('./routes/message');

const loginRouter = require('./routes/login');

app.use(bodyParser.urlencoded({extended: true}));

app.use(msgRouter);
app.use(loginRouter);

app.listen(3000);