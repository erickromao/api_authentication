const {Router} = require('express')
const LoginController = require('../controllers/LoginController')
const authenticationJWT = require('../middlewares/authenticationJWT')
const loginRouter = Router()

const loginController = new LoginController()

loginRouter.post("/", loginController.login)
loginRouter.get("/", authenticationJWT, loginController.private)

module.exports = loginRouter