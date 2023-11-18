const boom = require('boom');

const User = require('../models/user')


exports.getUsers = async (request, reply) => {
    try {
        const users = await User.find({ deleted: false });
        return users;
    } catch (error) {
        throw boom.boomify(error);
    }
}

exports.getUser = async (request, reply) => {
    try {
        const id = request.params.id;
        const user = await User.findById(id);
        return user;
    } catch (error) {
        throw boom.boomify(error);
    }
    
}

exports.addUser = async (request, reply) => {
    try {
        const user = new User(request.body)
        user.save()
        console.log(user)
        return user
    } catch (error) {
        throw boom.boomify(error)
    }
}

exports.removeUser = async (request, reply) => {
    try {
        const id = request.params.id;
        const user = await User.findById(id);
        user.deleted = true;
        user.save();
        return { message: "User deleted" };
    } catch (error) {
        throw boom.boomify(error);
    }
}

exports.updateUser = async (request, reply) => {
    try {
        const id = request.params.id
        const { ...updateData } = request.body
        const updateUser = await User.findByIdAndUpdate(id, updateData)
        return updateUser
    } catch (error) {
        throw boom.boomify(error);
    }
}