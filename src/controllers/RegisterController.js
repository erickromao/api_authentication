const knex = require('../database/knex')
const {hash} = require('bcryptjs')
const AppError = require('../utils/AppError')

class RegisterController{
    async register(request, response){
        const {name, email, password} = request.body

        const [checkEmail] = await knex("users").where({email})
        if(checkEmail){
            throw new AppError("Esse email já está em uso.")
        }

        const hashedPassword = await hash(password, 8)
    
        await knex("users").insert({
            name,
            email, 
            password:hashedPassword
        })

        return response.status(201).json({
            message: "Cadastro feito com sucesso!",
            name, 
            email,
            password
        })
        
    }
    
    async delete(request, response){
        const {id} = request.params
        
        const user = await knex("users").where({id})
        
        if(!user){
            throw new AppError("Usuário não encontrado.")
        }

        await knex("users").where({id}).delete()

        return response.json("Usuário apagado com sucesso.")
    }
}


module.exports = RegisterController