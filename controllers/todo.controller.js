import db from '../db/index.js'
import ToDo from '../models/todo.model.js'

export async function getAllTodos(req, res, next){
    const todos = db.data.todos?.filter((e) => !e.is_deleted)
    return res.render('index', {todos: todos ?? []})
}

export async function addNewTodo(req, res, next){
    const task = req.body.task
    db.data.todos.push(new ToDo(task))
    await db.write()
    return res.redirect('/todo')
}

export async function markTodoCompleted(req, res, next) {
    const {id} = req.params
    db.data.todos = db.data.todos.map(e => e.id == id ? {...e, is_completed: !e.is_completed} : e)
    await db.write()
    return res.redirect('/todo')
}

export async function deleteTodo(req, res, next){
    const {id} = req.params
    db.data.todos = db.data.todos.map(e => e.id == id ? {...e, is_deleted: !e.is_deleted} : e)
    await db.write()
    return res.redirect('/todo')
}