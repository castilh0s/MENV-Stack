const consola = require('consola')
const { Nuxt, Builder } = require('nuxt')

const app = require('./app')

// Import and Set Nuxt.js options
const isDev = !(process.env.NODE_ENV === 'production')
async function start() {
  const server = await app.initialize()

  // Init Nuxt.js
  const nuxt = new Nuxt(isDev)

  const { host, port } = nuxt.options.server

  // Build only in dev mode
  if (isDev) {
    const builder = new Builder(nuxt)
    await builder.build()
  } else {
    await nuxt.ready()
  }

  // Give nuxt middleware to express
  server.use(nuxt.render)

  // Listen the server
  server.listen(port, host)
  consola.ready({
    message: `Server listening on http://${host}:${port}`,
    badge: true
  })
}

start()
