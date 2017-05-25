import { GET_CAMPUSES, GET_STUDENTS, GET_CAMPUS, GET_STUDENT } from '../constants';
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

