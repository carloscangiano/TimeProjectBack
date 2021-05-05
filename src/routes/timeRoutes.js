
const express = require('express');
const router = express.Router();
const TimeController = require("../controllers/timeController");
const auth = require('../middleware/auth');

router.get('/time',auth.verify ,TimeController.getServerTime);

module.exports = router;