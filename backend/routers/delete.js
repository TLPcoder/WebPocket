"use strict";
const express = require('express');
const router = express.Router();
var knex = require('../knex');

router.put('/bookmark', function(req,res){//delete route doesnt work trying to findout why
    console.log(req.body)
    knex('bookmark')
    .where('bookmark_id', req.body.bookmark_id)
    .del()
    .then((data)=>{
        res.json(data);
    });
});
router.put('/category', function(req,res){//delete route doesnt work trying to findout why
    console.log(req.body)
    knex('category')
    .where('category_id', req.body.bookmark_id)
    .del()
    .then((data)=>{
        res.json(data);
    });
});

module.exports = router;
