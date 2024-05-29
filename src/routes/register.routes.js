const { Router } = require('express')
const RegisterController = require('../controllers/RegisterController')
const registerRouter = Router()

const registerController = new RegisterController()

registerRouter.post("/", registerController.register)
registerRouter.delete("/:id", registerController.delete)


module.exports = registerRouter