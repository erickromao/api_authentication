const { Router } = require('express')
const RegisterController = require('../controllers/RegisterController')
const registerRouter = Router()

const registerController = new RegisterController()

registerRouter.post("/register", registerController.register)



module.exports = registerRouter