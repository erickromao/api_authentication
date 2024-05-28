module.exports = {
  development:{
    client: 'pg',
    connection:{
      host:'localhost',
      user:'postgres',
      password:"123",
      database: "database_users"
    },
    migrations:{
      tableName: 'knex_migrations',
      directory: './src/database/knex/migrations'
    }
  }

}