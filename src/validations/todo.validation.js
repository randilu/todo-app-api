const { Joi } = require('celebrate');

const createTodoSchema = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string(),
    status: Joi.string().required(),
  }),
};

const getTodoSchema = {
  params: Joi.object().keys({
    todoId: Joi.string().hex().length(24),
  }),
};

const updateTodoSchema = {
  params: Joi.object().keys({
    todoId: Joi.string().hex().length(24),
  }),
  body: Joi.object()
    .keys({
      title: Joi.string(),
      description: Joi.string(),
      status: Joi.string(),
    })
    .min(1),
};

const deleteTodoSchema = {
  params: Joi.object().keys({
    todoId: Joi.string().hex().length(24),
  }),
};

module.exports = {
  createTodoSchema,
  getTodoSchema,
  updateTodoSchema,
  deleteTodoSchema,
};
