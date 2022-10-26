const express = require('express');
const { celebrate } = require('celebrate');
const { todoController } = require('../../controllers');
const { todoValidation } = require('../../validations');
const { validateTheRole } = require('../../utils/jwt-validator');

const router = express.Router();

router.route('/').get(todoController.getTodos).post(celebrate(todoValidation.createTodoSchema), todoController.createTodo);

router
  .route('/:todoId')
  .get(celebrate(todoValidation.getTodoSchema), todoController.getTodo)
  .patch(celebrate(todoValidation.updateTodoSchema), todoController.updateTodo)
  .delete(validateTheRole('admin'), celebrate(todoValidation.deleteTodoSchema), todoController.deleteTodo);

module.exports = router;
