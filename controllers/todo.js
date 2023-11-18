const boom = require('boom');

const Todo = require('../models/Todo')


exports.getTodos = async (request, reply) => {
    try {
        const todos = await Todo.find({deleted: false})
        return todos
    } catch (error) {
        throw boom.boomify(error)
    }
}


exports.getTodo = async (request, reply) => {
    try {
        const id = request.params.id
        const todo = await Todo.findById(id)
        return todo
    } catch (error) {
        throw boom.boomify(error)
    }
}


exports.addTodo = async (request, reply) => {
    try {
        const todo = new Todo(request.body);
        return todo.save()
    } catch (error) {
        throw boom.boomify(error)
    }
}


exports.updateTodo = async (request, reply) => {
    try {
        const id = request.params.id
        const todo = request.body
        console.log(todo, id)
        const { ...updateData } = todo
        const todoUpdate = await Todo.findByIdAndUpdate(id, updateData, { new: true })
        return todoUpdate
    } catch (error) {
        throw boom.boomify(error)
    }
}


exports.deleteTodo = async (request, reply) => {
    try {
        const id = request.params.id
        const todo = await Todo.findById(id)
        if (todo.deleted){
            return {message: "Todo already deleted"}
        }
        todo.deleted = true
        todo.save()
        return {message: "Todo Deleted"}
    } catch (error) {
        throw boom.boomify(error)
    }
}


exports.restoreTodo = async (request, reply) => {
  try {
    const id = request.params.id;
      const todo = await Todo.findById(id);

    if (!todo.deleted) {
      return { message: "Todo not deleted" };
    }
      
    todo.deleted = false;
    todo.save();
    return { message: "Todo Restored", todo};
  } catch (error) {
    throw boom.boomify(error);
  }
};