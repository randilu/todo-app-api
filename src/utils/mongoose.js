const mongoose = require('mongoose');

let conn = null;

const uri = process.env.MONGODB_URL;

exports.connect = async () => {
  if (conn == null) {
    conn = mongoose
      .connect(uri, {
        serverSelectionTimeoutMS: 5000,
      })
      .then(() => mongoose);
    await conn;
  }

  return conn;
};
