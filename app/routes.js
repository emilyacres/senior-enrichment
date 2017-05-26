import React from 'react';
import { Router, Route, hashHistory, IndexRedirect, IndexRoute } from 'react-router';

import { Provider, browserHistory } from 'react-redux';
import axios from 'axios';

import store from './store';
import App from './components/App'
import campusesContainer from './containers/campusesContainer';
import campusContainer from './containers/campusContainer';
import studentsContainer from './containers/studentsContainer';
import studentContainer from './containers/studentContainer';
import enrollContainer from './containers/enrollContainer';
import adminContainer from './containers/adminContainer';
import Congrats from './components/Congrats';
import Enrolled from './components/Enrolled';
import Home from './components/Home';

import { getCampuses, getStudents, getCampus, getStudent } from './action-creators';

const onAppEnter = () => {
  const promisedCampuses = axios.get('api/campuses');
  const promisedStudents = axios.get('api/students');

  return Promise.all([promisedCampuses, promisedStudents])
  .then(([campuses, students]) => {
    //console.log(campuses);
    store.dispatch(getCampuses(campuses));
    store.dispatch(getStudents(students));
    //console.log(this.state);
  })
}

const onStudentEnter = function (nextRouterState) {
  const studentId = nextRouterState.params.studentId;
  axios.get(`api/students/${studentId}`)
  .then(function(studentData){
    studentData = studentData.data;
    store.dispatch(getStudent(studentData))
  })
};

const onCampusEnter = function (nextRouterState) {
  const campusId = nextRouterState.params.campusId;
  axios.get(`api/campuses/${campusId}`)
  .then(function(campusData){
    campusData = campusData.data;
    store.dispatch(getCampus(campusData))
  })
};
export default function Routes () {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/home" component={Home} />
        <Route path="/" component={App} onEnter={onAppEnter}>
          <Route path="/campuses" component={campusesContainer} />
          <Route path="/admin" component={adminContainer} />
          <Route path="/congratulations" component={Congrats} />
          <Route path="/thanks" component={Enrolled} />
          <Route path="/campuses/:campusId" component={campusContainer} onEnter={onCampusEnter} />
          <Route path="/students" component={studentsContainer} />
          <Route path="/students/:studentId" component={studentContainer} onEnter={onStudentEnter} />
          <Route path="/enroll" component={enrollContainer} />
          <IndexRedirect to="/home" />
        </Route>
      </Router>
    </Provider>
  )
}
