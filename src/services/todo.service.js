const httpStatus = require('http-status');
const { todoModel } = require('../models');
const ApiError = require('../utils/ApiError');
// const { todo } = require('../__mocks__');

const getTodos = async () => todoModel.Todo.find({});

const createTodo = async (todoBody) => todoModel.Todo.create(todoBody);

// const queryTodos = async (filter, options) => mockTodos;

const getTodoById = async (id) => {
  let todo;
  try {
    todo = await todoModel.Todo.findById(id);
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'malformatted id');
  }
  if (!todo) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Todo not found');
  }
  return todo;
};

const updateTodoById = async (todoId, updateBody) => {
  const todo = await getTodoById(todoId);
  Object.assign(todo, updateBody);
  await todo.save();
  return todo;
};

const deleteTodoById = async (todoId) => {
  const todo = await getTodoById(todoId);
  await todo.remove();
  return todo;
};

module.exports = {
  createTodo,
  deleteTodoById,
  getTodoById,
  getTodos,
  updateTodoById,
};
