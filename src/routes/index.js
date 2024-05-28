const {Router} = require('express')
const registerRouter = require('./register.routes')
const router = Router()

router.use("/", registerRouter)

module.exports = router