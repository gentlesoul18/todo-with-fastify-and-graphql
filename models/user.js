const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String,
    deleted: {
        type: Boolean,
        default: false
    }
})


module.exports = mongoose.model('User', userSchema)