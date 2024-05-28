const knex = require('knex')

const config = require('../../../knexfile')

const connectionKnex = knex(config.development)

module.exports = connectionKnex