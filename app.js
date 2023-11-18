const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");
const swagger = require('./config/swagger')

fastify.register(require("@fastify/swagger"), swagger.options);
fastify.register(require("@fastify/swagger-ui"), {
  routePrefix: "/docs",
  uiConfig: {
    docExpansion: "full",
    deepLinking: false,
  },
  uiHooks: {
    onRequest: function (request, reply, next) {
      next();
    },
    preHandler: function (request, reply, next) {
      next();
    },
  },
  staticCSP: true,
  transformStaticCSP: (header) => header,
  transformSpecification: (swaggerObject, request, reply) => {
    return swaggerObject;
  },
  transformSpecificationClone: true,
});

// routes
fastify.register(require("./routes/index"), {prefix:'/'})
fastify.register(require("./routes/todo"), {prefix:'/todos'})
fastify.register(require("./routes/user"), {prefix:'/users'})


const start = async () => {
  try {
    await fastify.listen({ port: 3000 })
    fastify.swagger()
  } catch (error) {
    fastify.log.error(error);
    process.exit(1);
  }
}

// connect to db
mongoose.connect('mongodb://localhost/todo').then((err) => {
  console.log('Database connection established')
  start();
}).catch(err => {
  console.error(err);
})
