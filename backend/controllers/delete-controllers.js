'use strict';
const knex = require('../knex');
var exports = module.exports = {};

exports.deleteBookmark = function(req,res){
    console.log(req.body);
    knex('bookmark')
    .where('bookmark_id', req.body.bookmark_id)
    .del()
    .then((data)=>{
        res.json(data);
    });
};

exports.deleteCatgory = function(req,res){
    console.log(req.body);
    knex('category')
    .where('category_id', req.body.category_id)
    .del()
    .then((data)=>{
        console.log(data);
        knex('bookmark').where('category_id', req.body.category_id)
        .then((bookmarkData) =>{
            bookmarkData.forEach((el)=>{
                knex('bookmark').where('bookmark_id', el.bookmark_id).del();
            });
        });
        res.json(data);
    });
};
