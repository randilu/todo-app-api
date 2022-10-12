const express = require('express');
const todoController = require('../../controllers/todo.controller');

const router = express.Router();

router
  .route('/')
  .post(todoController.createTodo)
  .get(todoController.getTodos);

router
  .route('/:todoId')
  .get(todoController.getTodo)
  .patch(todoController.updateTodo)
  .delete(todoController.deleteTodo);

module.exports = router;
