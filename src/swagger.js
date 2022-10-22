const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = ['./routes/v1/index.js'];

swaggerAutogen(outputFile, endpointsFiles);
