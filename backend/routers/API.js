"use strict";
const express = require('express');
const router = express.Router();
var knex = require('../knex');


router.get('/', function(req, res) {
    res.json({
        message:"router is working"
    });
});

router.get('/category/:id', function(req,res){
    var id = req.params.id;
    knex('category').returning('*')
    .innerJoin('users', 'users.id','category.user_id')
    .where('users.id',id)
    .then(function(data){
        res.json(data);
    }).catch(function(err){
        console.log(err);
    });
});
router.get('/bookmarks/category/:id', function(req,res){
    var id = req.params.id;
    knex('bookmark').returning('*')
    .where('category_id',id)
    .then(function(data){
        res.json(data);
    }).catch(function(err){
        console.log(err);
    });
});


module.exports = router;
