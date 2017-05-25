import React from 'react';
import { Router, Route, hashHistory, IndexRedirect, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import axios from 'axios';

import store from './store';
import App from './components/App'
import campusesContainer from './containers/campusesContainer';
import campusContainer from './containers/campusContainer';
import studentsContainer from './containers/studentsContainer';
import studentContainer from './containers/studentContainer';
import Home from './components/Home';

import { getCampuses, getStudents } from './action-creators';

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

export default function Routes () {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/home" component={Home} />
        <Route path="/" component={App} onEnter={onAppEnter}>
          <Route path="/campuses" component={campusesContainer} />
          <Route path="/campus" component={campusContainer} />
          <Route path="/students" component={studentsContainer} />
          <Route path="/student" component={studentContainer} />
          <IndexRedirect to="/home" />
        </Route>
      </Router>
    </Provider>
  )
}
