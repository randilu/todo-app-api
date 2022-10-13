/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
const mongoose = require('mongoose');

const todoSchema = mongoose.Schema(
  {
    title: String,
    description: String,
    status: String,
  },
  {
    timestamps: true,
  },
);

// We do this to get rid of the _id and __v fields in the response
todoSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
