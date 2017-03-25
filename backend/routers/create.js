"use strict";
const express = require('express');
const router = express.Router();
var knex = require('../knex');

router.post('/category', function(req,res){
    console.log("body", req.body)
    var body = req.body;
    knex('category').insert({
        category_name: body.category_name,
        user_id: body.user_id
    }).then((data) => {
        console.log(data)
        res.json(data);
    }).catch((err)=>{
        console.log(err);
    });
});

router.post('/bookmark', function(req,res){
    var body = req.body;
    console.log(body);
    knex('bookmark').insert({
        bookmark_name: body.bookmark_name,
        category_id: body.category_id,
        url: body.url
    }).then((data) => {
        res.json(data);
    });
});

module.exports = router;
