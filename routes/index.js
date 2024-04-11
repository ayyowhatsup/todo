import express from 'express'
import * as TodoController from '../controllers/todo.controller.js'

const router = express.Router()

router.route('/').get(TodoController.getAllTodos).post(TodoController.addNewTodo)
router.post('/:id/completed', TodoController.markTodoCompleted)
router.post('/:id/delete', TodoController.deleteTodo)

export default router