const path = require('path')

module.exports = {
  development:{
    client: 'pg',
    connection:{
      host:'localhost',
      user:'postgres',
      password:"123",
      database: "database"
    },
    migrations:{
      directory: path.resolve(__dirname,"src", "database", "knex", "migrations")
    }
  }

}