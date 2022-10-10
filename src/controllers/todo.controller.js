const httpStatus = require('http-status');
const { todoService } = require('../services');

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
    if (!todo) {
      res.status(httpStatus.NOT_FOUND).send({ message: 'Todo not found' });
    }
    res.send(todo);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message: error.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const todo = await todoService.updateTodoById(req.params.todoId, req.body);
    res.send(todo);
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send({ message: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    await todoService.deleteTodoById(req.params.todoId);
    res.status(httpStatus.NO_CONTENT).send();
  } catch (error) {
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
