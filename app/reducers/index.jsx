import { combineReducers } from 'redux';
import { GET_CAMPUSES, GET_STUDENTS } from '../constants';

const initialState = {
  campuses: [],
  students: []
};

const rootReducer = function(state = initialState, action) {
  const newState = Object.assign({}, state);

  switch(action.type) {

    case GET_CAMPUSES:
      newState.campuses = action.campuses.data;
      break;

    case GET_STUDENTS:
      newState.students = action.students.data;
      break;

    default: return state
  }
  return newState;
};

export default rootReducer
