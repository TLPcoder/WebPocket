'use strict';
const knex = require('../knex');
var exports = module.exports = {};

exports.login = function(req, res) {
    //not hashing passwords right now but will in a later commit
    var body = req.body;
    knex('users')
    .where('username', body.user_name)
    .where('hashed_password', body.hashed_password)
    .then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
    });
};
