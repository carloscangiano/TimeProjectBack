
const express = require('express');
const router = express.Router();
const promMid = require('express-prometheus-middleware');
const auth = require('../middleware/auth');

router.get('/metrics', auth.verify ,promMid({
  collectDefaultMetrics: true,
  requestDurationBuckets: [0.1, 0.5, 1, 1.5],
  requestLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
  responseLengthBuckets: [512, 1024, 5120, 10240, 51200, 102400],
  authenticate: req => req.headers.authorization === 'mysecrettoken',
}));

module.exports = router;