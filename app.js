const fastify = require("fastify")({ logger: true });
const mongoose = require("mongoose");

fastify.register(require("./routes/index"))


const start = async () => {
  try {
    await fastify.listen({port:3000})
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
