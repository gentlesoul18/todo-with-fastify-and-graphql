const index = require('../controllers/index')

async function indexRoutes(fastify, options) {
    fastify.get('', index.landingPage)
}


module.exports = indexRoutes