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

import { getCampuses, getStudents } from './action-creators'
const onAppEnter = () => {
  const promisedCampuses = axios.get('api/campuses');
  const promisedStudents = axious.get('api/students');

  return Promise.all([promisedCampuses, promisedStudents])
  .spread((campuses, students) => {
    store.dispatch(getCampuses(campuses));
    store.dispatch(getStudents(students))
  })
}

export default function Routes () {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/campuses" component={campusesContainer} />
          <Route path="/campus" component={campusContainer} />
          <Route path="/students" component={studentsContainer} />
          <Route path="/student" component={studentContainer} />
        </Route>
      </Router>
    </Provider>
  )
}
