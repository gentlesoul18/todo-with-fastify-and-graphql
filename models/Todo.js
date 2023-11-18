const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    deleted: {
        type: Boolean,
        default: false
    },
    status: {
        type: String,
        default: 'Backlog',
        enum: ['Backlog', 'In Progress', 'Completed', 'Due', 'Trash']
    },
    created: {
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('Todo', todoSchema)