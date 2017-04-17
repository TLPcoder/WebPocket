'use strict';
const knex = require('../knex');
var exports = module.exports = {};

exports.getCategories = function(req,res){
    var id = req.params.id;
    knex('category').returning('*')
    .innerJoin('users', 'users.id','category.user_id')
    .where('users.id',id)
    .then(function(data){
        res.json(data);
    }).catch(function(err){
        console.log(err);
    });
};

exports.getBookmarks = function(req,res){
    var id = req.params.id;
    knex('bookmark').returning('*')
    .where('category_id',id)
    .then(function(data){
        res.json(data);
    }).catch(function(err){
        console.log(err);
    });
};
