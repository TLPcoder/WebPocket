'use strict';
const knex = require('../knex');
var exports = module.exports = {};

exports.createBookmark = function(req,res){
    var body = req.body;
    console.log(body);
    knex('bookmark').insert({
        bookmark_name: body.bookmark_name,
        category_id: body.category_id,
        url: body.url
    }).then((data) => {
        res.json(data);
    }).catch((err)=>{
        console.log(err);
    });
};

exports.createCategoty = function(req,res){
    console.log("body", req.body);
    var body = req.body;
    knex('category').insert({
        category_name: body.category_name,
        user_id: body.user_id
    }).then((data) => {
        res.json(data);
    }).catch((err)=>{
        console.log(err);
    });
};

exports.createUser = function(req,res){
    var body = req.body;
    console.log(body);
    knex('users').returning('*').insert({
        first_name:body.first_name,
        last_name:body.last_name,
        username:body.username,
        email:body.email,
        hashed_password:body.hashed_password
    }).then((data) =>{
        console.log(data);
        res.json(data);
    }).catch((err)=>{
        console.log(err);
    });
};
