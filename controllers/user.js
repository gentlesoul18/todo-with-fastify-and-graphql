const User = require('../models/user')


exports.getUsers = async (request, reply) => {
    const users = await User.find({deleted: false})
    return users
}

exports.getUser = async (request, reply) => {
    const id = request.params.id
    const user = await User.findById(id)
    return user
}

exports.addUser = async (request, reply) => {
    const user = new User(request.body)
    user.save()
    console.log(user)
    return user
}

exports.removeUser = async (request, reply) => {
    const id = request.params.id
    const user = await User.findById(id)
    user.deleted = true
    user.save()
    return {message: 'User deleted'}
}

exports.updateUser = async (request, reply) => {
    const id = request.params.id
    const { ...updateData } = request.body
    const updateUser = await User.findByIdAndUpdate(id, updateData)
    return updateUser
}