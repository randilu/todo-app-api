const express = require('express');
const todoController = require('../../controllers/todo.controller');

const router = express.Router();

router
  .route('/')
  .get(todoController.getTodos);

module.exports = router;
