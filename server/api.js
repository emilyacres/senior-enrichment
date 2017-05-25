'use strict'
const api = require('express').Router()
const db = require('../db')

const Campuses = db.models.campus;
const Students = db.models.student;

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!
api.get('/hello', (req, res) => {
  console.log(db);
  res.send({hello: 'world'})
})

api.get('/campuses', (req, res, next) => {

  Campuses.findAll({})
  .then(function(data){
    data = data.map(campus => {
      return campus.dataValues;
    });
    res.send(data);
  })
  .catch(console.error)
})

api.get('/students', (req, res, next) => {
  Students.findAll({})
  .then(function(data){
    data = data.map(student => {
      return student.dataValues;
    });
    res.send(data);
  })
  .catch(console.error)
})


module.exports = api
