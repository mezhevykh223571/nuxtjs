const { Nuxt, Builder } = require('nuxt')
const fastify = require('fastify')({
  logger: true
})
const { server } = require('../nuxt.config')

const host = server.host
const port = server.port

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js')
config.dev = !(process.env.NODE_ENV === 'production')

async function start() {
  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  fastify.use(nuxt.render)

  const host = config.server.host
  const port = config.server.port

  fastify.listen(port, host, (err, address) => {
    if (err) {
      fastify.log.error(err)
      process.exit(1)
    }
  })
}

start()
