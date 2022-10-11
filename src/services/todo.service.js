const ToDo = require('../models/todo.model');
// const { todo } = require('../__mocks__');

const getTodos = async () => ToDo.find({});

const createTodo = async (todoBody) => ToDo.create(todoBody);

/* const queryTodos = async (filter, options) => mockTodos;

const getTodoById = async (id) => Todo.findById(id);

const updateTodoById = async (todoId, updateBody) => {
  const todo = await getTodoById(todoId);
  if (!todo) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Todo not found');
  }
  if (updateBody.email && (await Todo.isEmailTaken(
    updateBody.email,
    todoId,
  ))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(todo, updateBody);
  await todo.save();
  return todo;
};

const deleteTodoById = async (todoId) => {
  const todo = await getTodoById(todoId);
  if (!todo) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Todo not found');
  }
  await todo.remove();
  return todo;
}; */

module.exports = {
  createTodo,
  //  deleteTodoById,
  // getTodoById,
  getTodos,
  // queryTodos,
  // updateTodoById,
};
