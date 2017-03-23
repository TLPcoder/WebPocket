"use strict";
const express = require('express');
const app = express();
const PORT = 8000;

app.get('/', function(req,res){
    res.json({
        message:"hello there"
    });
});

app.listen(PORT, function(){
    console.log(`hello from port ${PORT}`);
});
