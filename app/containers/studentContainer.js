import Student from '../components/Student';
import { connect } from 'react-redux';

const mapState = (state) => {
  //console.log(state)
  return {
    // selectedStudent: state.selectedStudent,
    // campuses: state.campuses
  };
};

const studentContainer = connect(mapState)(Student);

export default studentContainer;
