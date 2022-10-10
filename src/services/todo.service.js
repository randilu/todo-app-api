const { todo } = require('../__mocks__');

const getTodos = async () => todo.mockTodos;

module.exports = {
  getTodos,
};
