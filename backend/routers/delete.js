"use strict";
const express = require('express');
const router = express.Router();
const controller = require('../controllers/delete-controllers');

router.put('/bookmark', controller.deleteBookmark);//delete route doesnt work trying to findout why
router.put('/category', controller.deleteCatgory);//delete route doesnt work trying to findout why

module.exports = router;
