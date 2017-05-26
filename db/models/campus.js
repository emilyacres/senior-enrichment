'use strict';
var Sequelize = require('sequelize')
var db = require('../index.js')


module.exports = db.define('campus', {
  name: Sequelize.STRING,
  //img url
  image: Sequelize.STRING,
  galaxy: Sequelize.STRING,
  system: Sequelize.STRING
})
