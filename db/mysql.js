const Sequelize = require('sequelize')
const dbConfig = require('../config/db')

const mysql = new Sequelize(dbConfig)

module.exports = mysql