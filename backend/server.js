"use strict";
const express = require('express');
const app = express();
const knex = require('./knex');
const PORT = process.env.PORT || 8000;
const bodyParser = require('body-parser');
const API = require('./routers/API');
const login = require('./routers/login');
const deleteRoute = require('./routers/delete');
const create = require('./routers/create');

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

app.use("/public", express.static("public"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/API', API);
app.use('/login', login);
app.use('/create', create);
app.use('/delete', deleteRoute);

app.get('/', function(req,res){
    knex('category').then((res) => {
        res.json(res);
    }).catch((err)=>{
        console.log('this is an error', err);
    });
});

app.listen(PORT, function(){
    console.log(`hello from port ${PORT}`);
});
