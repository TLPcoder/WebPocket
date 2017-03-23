"use strict";
const express = require('express');
const router = express.Router();
var knex = require('../knex');


router.get('/:userName/', function(req, res) {
    var userName = req.params.userName;
    knex('users')
    .where('username', userName)
    .then((data) => {
        res.json(data);
    }).catch((err) => {
        console.log(err);
    });
});

module.exports = router;
