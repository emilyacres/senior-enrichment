import { GET_CAMPUSES, GET_STUDENTS, GET_CAMPUS, GET_STUDENT, ADD_STUDENT } from '../constants';
import axios from 'axios';

export const getCampuses = campuses => ({
  type: GET_CAMPUSES,
  campuses
});

export const getStudents = students => ({
  type: GET_STUDENTS,
  students
});

export const getCampus = campus => ({
  type: GET_CAMPUS,
  campus
});

export const getStudent = student => ({
  type: GET_STUDENT,
  student
});

export const addStudent = student => ({
  type: ADD_STUDENT,
  student
});

export const postStudent = student => {
  return (dispatch, getState) => {
    return axios.post('/api/students', {
      name: student.name,
      email: student.email,
      bio: student.bio,
      campus_id: student.campusId
    })
    .then(res => res.data)
    .then(student => {
      const newStudents = getState().students.concat([student]);
      dispatch(addStudent(newStudents));
    })
  }
}

