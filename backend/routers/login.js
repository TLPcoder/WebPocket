"use strict";
const express = require('express');
const router = express.Router();
var knex = require('../knex');


router.post('/', function(req, res) {
    //not hashing passwords right now but will in a later commit
    var body = req.body;
    console.log(body)
    knex('users')
    .where('username', body.user_name)
    .where('hashed_password', body.hashed_password)
    .then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
    });
});

module.exports = router;
