import { GET_CAMPUSES, GET_STUDENTS } from '../constants';
import axios from 'axios';

export const getCampuses = campuses => ({
  type: GET_CAMPUSES,
  campuses
})

export const getStudents = students => ({
  type: GET_STUDENTS,
  students
})
