const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output_demo.json';
const endpointsFiles = ['./routes/v1/index.js'];

swaggerAutogen(outputFile, endpointsFiles);
