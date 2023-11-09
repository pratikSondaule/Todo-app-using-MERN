const express = require('express');
const todoController = require('../controllers/todo.controller');
const todoRouter = express.Router();

todoRouter.get('/', todoController.getAllTodos);
todoRouter.post('/', todoController.addTodo);
todoRouter.put('/:id', todoController.editTodo);
todoRouter.delete('/delete/:id', todoController.deleteTodo);

module.exports = todoRouter;