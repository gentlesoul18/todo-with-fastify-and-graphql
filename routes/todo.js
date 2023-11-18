const todo = require('../controllers/todo')


async function todoRoutes(fastify, options) {
    fastify.get('', todo.getTodos)
    fastify.get('/:id', todo.getTodo)
    fastify.post('/create', todo.addTodo)
    fastify.patch('/update/:id', todo.updateTodo)
    fastify.delete('/delete/:id', todo.deleteTodo)
    fastify.patch("/restore/:id", todo.restoreTodo);
}

module.exports = todoRoutes