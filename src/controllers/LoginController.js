const jwt = require('jsonwebtoken')
const AppError = require('../utils/AppError')
const {compare} = require('bcryptjs')
const knex = require('../database/knex')

class LoginController{

    async login(request, response){
        const {email, password} = request.body
        const KEY = "123"

        if(!email || !password) throw new AppError("Preencha todos os campos.")

        const [user] = await knex("users").where({email})
        
        if(!user){
            throw new AppError("Usuário não encontrado.")
        }

        const checkPassword = await compare(password, user.password)
        if(!checkPassword){
            throw new AppError("Senha incorreta.")
        }
        const token = jwt.sign({email: user.email}, KEY, {expiresIn:'1m'})
        return response.json({
            message:"Login feito com sucesso!",
            token: token
        })
    }
    private(request, response){
        response.send("Local protegido acessado!")
    }
}

module.exports = LoginController
