const express = require('express');
const { celebrate } = require('celebrate');
const { todoController } = require('../../controllers');
const { todoValidation } = require('../../validations');

const router = express.Router();

router.route('/').post(celebrate(todoValidation.createTodoSchema), todoController.createTodo).get(todoController.getTodos);

router
  .route('/:todoId')
  .get(celebrate(todoValidation.getTodoSchema), todoController.getTodo)
  .patch(celebrate(todoValidation.updateTodoSchema), todoController.updateTodo)
  .delete(celebrate(todoValidation.deleteTodoSchema), todoController.deleteTodo);

module.exports = router;
