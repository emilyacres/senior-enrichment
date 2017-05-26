import { GET_CAMPUSES, GET_STUDENTS, GET_CAMPUS, GET_STUDENT, ADD_STUDENT, DELETE_CAMPUS } from '../constants';
import axios from 'axios';
import { hashHistory } from 'react-router'

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

export const deleteCampus = campuses => ({
  type: DELETE_CAMPUS,
  campuses
});


export const postStudent = student => {
  console.log(student)
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

export const updateStudent = obj => {
  const campusId = obj.campus;
  const studentId = obj.student
  console.log("action creator")
  return (dispatch, getState) => {
    console.log("axios")
    return axios.put(`/api/students/${studentId}`, {
      campus_id: campusId
    })
    .then(res => res.data)
    .then(students => {
      // const newStudents = getState().students.concat([student]);
      dispatch(addStudent(students));
    })
  }
}

export const deleteStudent = student => {
  console.log("axios")
  return (dispatch, getState) => {
    return axios.delete(`/api/students/${student.id}`, {
      id: student.id
    })
    .then(() => {
      const newStudents = getState().students.filter(arrStudent => {
        return arrStudent.id !== student.id;
      });
      dispatch(addStudent(newStudents));
    })
  }
}

export const destroyCampus = campusId => {
  //console.log("axios")
  return (dispatch, getState) => {
    return axios.delete(`/api/campuses/${campusId}`, {
      id: campusId
    })
    .then(() => {
      const oldCampuses = getState().campuses;
      console.log('old', oldCampuses.length);
      const newCampuses = getState().campuses.filter(arrCampus => {
        return +arrCampus.id !== +campusId
      });
      console.log('new', newCampuses.length);
      dispatch(deleteCampus(newCampuses));
      console.log('deleted campus, pushing to campuses');
      hashHistory.push('/campuses');
    })
  }
}
