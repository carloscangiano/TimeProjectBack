  
const express = require('express');
const app = express();
const timeRoutes = require('./routes/timeRoutes');
const metricsRoutes = require('./routes/metricsRoutes');
const cors = require('cors');

app.use(cors());
// Routes
app.use('/', timeRoutes);
app.use('/', metricsRoutes);

module.exports = app;