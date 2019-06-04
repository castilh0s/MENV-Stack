const User = require('../models/user')

const createUser = async ({ user }) => {
  try {
    let userModel = new User()
    userModel = user

    const response = await userModel.save()
    return response
  } catch (err) {
    return err
  }
}

module.exports = { createUser }
