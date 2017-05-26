import { combineReducers } from 'redux';
import { GET_CAMPUSES, GET_STUDENTS, GET_STUDENT, GET_CAMPUS, ADD_STUDENT } from '../constants';

const initialState = {
  campuses: [],
  students: [],
  selectedCampus: {},
  selectedStudent: {}
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

    case GET_STUDENT:
      newState.selectedStudent = action.student;
      break;

    case GET_CAMPUS:
      newState.selectedCampus = action.campus;
      break;

    case ADD_STUDENT:
    console.log(action)
      newState.students = action.student;
      break;

    default: return state
  }
  return newState;
};

export default rootReducer
