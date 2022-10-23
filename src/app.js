const express = require('express');
const routes = require('./routes/api/v1');

const app = express();

app.use(express.json());

// v1 api routes
app.use('/api/v1', routes);

module.exports = app;
