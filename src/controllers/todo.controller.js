const httpStatus = require('http-status');
const { todoService } = require('../services');
const ApiError = require('../utils/ApiError');

const createTodo = async (req, res) => {
  try {
    const todo = await todoService.createTodo(req.body);
    res.status(httpStatus.CREATED).send(todo);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message: error.message });
  }
};

const getTodos = async (req, res) => {
  try {
    const result = await todoService.getTodos();
    res.send(result);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message: error.message });
  }
};

const getTodo = async (req, res) => {
  try {
    const todo = await todoService.getTodoById(req.params.todoId);
    res.send(todo);
  } catch (error) {
    if (error instanceof ApiError) {
      const { statusCode, message } = error;
      res.status(statusCode).send({ code: statusCode, message });
      return;
    }
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message: error.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const todo = await todoService.updateTodoById(req.params.todoId, req.body);
    res.send(todo);
  } catch (error) {
    if (error instanceof ApiError) {
      const { statusCode, message } = error;
      res.status(statusCode).send({ code: statusCode, message });
      return;
    }
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    await todoService.deleteTodoById(req.params.todoId);
    res.status(httpStatus.NO_CONTENT).send();
  } catch (error) {
    if (error instanceof ApiError) {
      const { statusCode, message } = error;
      res.status(statusCode).send({ code: statusCode, message });
      return;
    }
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message: error.message });
  }
};

module.exports = {
  createTodo,
  getTodos,
  getTodo,
  updateTodo,
  deleteTodo,
};
