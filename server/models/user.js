const mongoose = require('mongoose')
const { Schema } = mongoose

const UserSchema = new Schema(
  {
    name: String,
    email: String
  },
  {
    strict: false,
    collection: 'user',
    timestamps: true
  }
)

module.exports = mongoose.model('User', UserSchema)
