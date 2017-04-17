"use strict";
const express = require('express');
const router = express.Router();
const controller = require('../controllers/API-controllers');

router.get('/category/:id', controller.getCategories);

router.get('/bookmarks/category/:id', controller.getBookmarks);


module.exports = router;
