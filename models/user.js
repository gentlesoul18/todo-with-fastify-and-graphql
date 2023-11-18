const mongoose = require('mongoose');


const userSchema = new Schema({
    firstName: String,
    lastName: String,
    username: String,
    email: String
})


module.exports = mongoose.model('User', userSchema)