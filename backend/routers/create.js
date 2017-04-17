"use strict";
const express = require('express');
const router = express.Router();
const controller = require('../controllers/create-controllers');

router.post('/category', controller.createCategoty);

router.post('/bookmark', controller.createBookmark);

router.post('/user', controller.createUser);

module.exports = router;
