const httpStatus = require('http-status');
const Todo = require('../models/todo.model');
const ApiError = require('../utils/ApiError');
// const { todo } = require('../__mocks__');

const getTodos = async () => Todo.find({});

const createTodo = async (todoBody) => Todo.create(todoBody);

// const queryTodos = async (filter, options) => mockTodos;

const getTodoById = async (id) => {
  const todo = Todo.findById(id);
  console.log(todo);
  if (!todo) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Todo not found');
  }
  return todo;
};

const updateTodoById = async (todoId, updateBody) => {
  const todo = await getTodoById(todoId);
  if (!todo) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Todo not found');
  }
  Object.assign(todo, updateBody);
  await todo.save();
  return todo;
};

const deleteTodoById = async (todoId) => {
  const todo = await getTodoById(todoId);
  /* if (!todo) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Todo not found');
  } */
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
