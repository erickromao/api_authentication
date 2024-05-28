const express = require('express')
const router = require('./routes')
const createDB = require('./database')

require('dotenv').config()

createDB()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(router)

app.listen(PORT,()=> console.log(`Server ON ${PORT}`))