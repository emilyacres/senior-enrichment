import React from 'react';
import { Router, Route, hashHistory, IndexRedirect, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import store from './store';
import App from './components/App'
import Campuses from './components/Campuses';
import Campus from './components/Campus';
import Students from './components/Students';
import Student from './components/Student';

export default function Routes () {
  return (
    <Provider store={store}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <Route path="/campuses" component={Campuses} />
          <Route path="/campus" component={Campus} />
          <Route path="/students" component={Students} />
          <Route path="/student" component={Student} />
        </Route>
      </Router>
    </Provider>
  )
}
