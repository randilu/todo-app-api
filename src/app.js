const express = require('express');
const routes = require('./routes/api/v2');

const app = express();

app.use(express.json());

// v1 api routes
app.use('/api/v2', routes);

module.exports = app;
