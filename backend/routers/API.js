"use strict";
const express = require('express');
const router = express.Router();
var knex = require('../knex');
const controller = require('../controllers/API-controllers');


router.get('/', function(req, res) {
    res.json({
        message:"router is working"
    });
});
router.get('/category/:id', controller.getCategories);

router.get('/bookmarks/category/:id', controller.getBookmarks);


module.exports = router;
