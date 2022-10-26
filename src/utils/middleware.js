module.exports.printRequestBody = function printRequestBody(req, res, next) {
  console.log('...... printing the body');
  console.log(req.body);
  next();
};

module.exports.printRequestHeader = function printRequestHeader(req, res, next) {
  console.log('...... printing the headers');
  console.log(req.headers);
  next();
};
