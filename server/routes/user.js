const { Router } = require('express')
const router = Router()

const { createUser } = require('../management/user')

/* POST :user */
router.post('/', async (req, res) => {
  const user = req.body
  const result = await createUser({ user: user })
  res.json(result)
})

module.exports = router
