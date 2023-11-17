const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    is_deleted: Boolean,
    status: {
        type: String,
        enum: ['Backlog', 'In Progress', 'Completed', 'Due', 'Trash']
    },
    created: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('Todo', todoSchema)