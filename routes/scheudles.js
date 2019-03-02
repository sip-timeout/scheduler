const express = require('express');
const asyncHandler = require('express-async-handler');


const router = express.Router();
const controller = require('../controllers/scheduler');

router.post('/', asyncHandler(controller.add_schedule));

module.exports = router;
