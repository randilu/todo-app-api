const serverless = require('serverless-http');
const app = require('./src/app');
const { connect } = require('./src/utils/mongoose');

const httpHandler = serverless(app);

module.exports.handler = async (event, context) => {
  await connect();
  const result = await httpHandler(event, context);
  return result;
};
