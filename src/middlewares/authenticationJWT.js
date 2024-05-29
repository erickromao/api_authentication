const jwt = require("jsonwebtoken")
const AppError = require('../utils/AppError')

function authenticationJWT(request,response, next){
    const KEY = "123"
    const token = request.headers.authorization && request.headers.authorization.split(' ')[1];
    
    if(!token){
        throw new AppError("Acesso negado!")
    }
    jwt.verify(token, KEY, (err,user)=>{
        if(err){
            console.error(err)
            throw new AppError("Token inválido!")
        }
        request.user = user
        next()
    })
}

module.exports = authenticationJWT