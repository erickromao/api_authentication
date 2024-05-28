const { Pool } = require('pg')

const pool = new Pool({
    user:'postgres',
    host: 'localhost',
    database:'database',
    password: '123',
    port: 5432
})

const dbName = 'database'

async function checkCreateDB(){
    try{
        const client = await pool.connect()
        const resultado = await client.query(`SELECT 1 FROM pg_database WHERE datname = '${dbName}'`)
        if(resultado.rows.length ===0){
            await client.query(`CREATE DATABASE ${dbName}`)
            console.log(`Banco de dados '${dbName}' criado com sucesso!`)
        }else{
            console.log(`Banco de dados '${dbName}' já existe!`)
        }
    }catch(err){
        console.error('Error ao verificar ou criar o banco de dados: ', err)
    } finally{
        pool.end()
    }
}

module.exports = checkCreateDB