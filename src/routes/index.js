const {Router} = require('express')
const registerRouter = require('./register.routes')
const LoginController = require('./login.routes')
const router = Router()

router.use("/register", registerRouter)
router.use("/login", LoginController)

module.exports = router