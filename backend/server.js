"use strict";
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const API = require('./routers/API')

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

    // intercept OPTIONS method
    if ('OPTIONS' === req.method) {
      res.sendStatus(200);
    }
    else {
      next();
    }
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/API', API);

app.get('/', function(req,res){
    res.json({
        message:"hello there"
    });
});

app.listen(PORT, function(){
    console.log(`hello from port ${PORT}`);
});
