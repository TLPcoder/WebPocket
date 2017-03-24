"use strict";
const express = require('express');
const router = express.Router();
var knex = require('../knex');


router.get('/', function(req, res) {
    res.json({
        message:"router is working"
    });
});

router.get('/bookmarks/:id', function(req,res){
    var id = req.params.id;
    knex('bookmark').returning('*')
    .innerJoin('category','bookmark.category_id','category.id')
    .innerJoin('users', 'users.id','category.user_id')
    .where('users.id',id)
    .then(function(data){
        let bookmarks = {};
        data.forEach((el) => {
            if(!bookmarks[el.category_name]){
                bookmarks[el.category_name] = [];
            }
            if(bookmarks[el.category_name]){
                bookmarks[el.category_name].push(el);
            }
        });
        res.json(bookmarks);
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
