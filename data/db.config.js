const kenex = require('kenx')
const configs = require('../knexfile')
const env = process.env.NODE_ENV || 'development'

module.exports(kenex(configs[env]))