'use strict'
const api = require('express').Router()
const db = require('../db')

const Campuses = db.models.campus;
const Students = db.models.student;


api.put('/students/:studentId', (req, res, next) => {
  console.log("api")
  const studentId = req.params.studentId;
  Students.update(req.body, {
    where: {
      id: studentId
    }
  })
  .then(() => {
    return Students.findAll({})
  })
  .then(data => {
    data = data.map(student => {
      return student.dataValues;
    });
    res.send(data);
  })
  .catch(console.error)
})


api.delete('/students/:studentId', (req, res, next) => {
  const studentId = req.params.studentId;
  Students.destroy({
    where: {
      id: studentId
    }
  })
  .then(function(){
    res.send('deleted');
  })
  .catch(console.error)
})

api.delete('/campuses/:campusId', (req, res, next) => {
  const campusId = req.params.campusId;
  Campuses.destroy({
    where: {
      id: campusId
    }
  })
  .then(function(){
    res.send('deleted');
  })
  .catch(console.error)
})


api.get('/campuses/:campusId', (req, res, next) => {
  const campusId = req.params.campusId;
  Campuses.findOne({
    where: {
      id: campusId
    }
  })
  .then(function(campus){
    res.send(campus);
  })
  .catch(console.error)
})

api.get('/students/:studentId', (req, res, next) => {
  const studentId = req.params.studentId;
  Students.findOne({
    where: {
      id: studentId
    }
  })
  .then(function(student){
    res.send(student);
  })
  .catch(console.error)
})

api.get('/campuses/:campusId', (req, res, next) => {
  const campusId = req.params.campusId;
  Campuses.findOne({
    where: {
      id: campusId
    }
  })
  .then(function(campus){
    res.send(campus);
  })
  .catch(console.error)
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

api.post('/students', (req, res, next) => {
  Students.create(req.body)
  .then(student => {
    res.send(student)
  })
  .catch(console.error)
})




module.exports = api
