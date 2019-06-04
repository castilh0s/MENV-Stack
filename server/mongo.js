const mongoose = require('mongoose')
const consola = require('consola')
const config = require('./config')

let mongoServer

module.exports.connect = () =>
  new Promise((resolve, reject) => {
    const MONGODB_URI = config.MONGODB_URI

    mongoose.connection.on('connected', () => {
      consola.info('MongoDB connected!')
      resolve()
    })

    try {
      mongoose
        .connect(MONGODB_URI, {
          autoReconnect: true,
          reconnectTries: 0,
          reconnectInterval: 100,
          useNewUrlParser: true
        })
        .then(resolve, reject)
    } catch (e) {
      reject(e)
    }
  })

module.exports.disconnect = () => {
  if (process.env.NODE_ENV === 'test') {
    mongoServer.stop()
  }

  mongoose.disconnect()
}
