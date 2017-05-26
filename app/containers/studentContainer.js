import Student from '../components/Student';
import { connect } from 'react-redux';
import { deleteStudent, updateStudent } from '../action-creators'

const mapState = (state) => {
  //console.log(state)
  return {
    selectedStudent: state.selectedStudent,
    campuses: state.campuses
  };
};

const mapDispatch = (dispatch) => {
  return {
    deleteStudent: (student) => {
      dispatch(deleteStudent(student));
    },
    updateStudent: (obj) => {
      dispatch(updateStudent(obj))
    }
  };
};

const studentContainer = connect(mapState, mapDispatch)(Student);

export default studentContainer;
