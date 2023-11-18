const mongoose = require('mongoose');

const User = require('../models/user')


const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    deleted: {
        type: Boolean,
        default: false
    },
    categories: {
        type: String,
        default: 'Learning',
        enum:['Learning', 'Religious', 'Leisure', 'Others']
    },
    status: {
        type: String,
        default: 'Backlog',
        enum: ['Backlog', 'In Progress', 'Completed', 'Due', 'Trash']
    },
    created: {
        type: Date,
        default: Date.now()
    },
    dueDate: Date,
    user: {
        type: mongoose.Types.ObjectId,
        ref: User
    }
})


module.exports = mongoose.model('Todo', todoSchema)