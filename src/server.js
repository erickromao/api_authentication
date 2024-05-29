require('express-async-errors')
const express = require('express')
const checkCreateDB = require('./database')
const AppError = require('./utils/AppError')
const router = require('./routes')


require('dotenv').config()

checkCreateDB()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(router)

app.use((error, request, response, next)=>{
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message,
        })
    }
    console.error(error)
    return response.status(500).send("Internal server error")
})

app.listen(PORT,()=> console.log(`Server ON ${PORT}`))