const user = require('../controllers/user')

async function userRoutes(fastify, options) {
    fastify.get('', user.getUsers)
    fastify.get("/:id", user.getUser);
    fastify.post("/add", user.addUser);
    fastify.delete("/remove/:id", user.removeUser);
    fastify.patch("/update/:id", user.updateUser);
}

module.exports = userRoutes;