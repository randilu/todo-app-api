const swaggerUi = require('swagger-ui-express');
const express = require('express');
const cors = require('cors');
const { errors } = require('celebrate');
const routes = require('./routes/v1');

const swaggerFile = require('./swagger_output.json');

const app = express();

app.use(express.json());
app.use(cors());

// v1 api routes
app.use('/v1', routes);
app.use(errors());

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile));

module.exports = app;
