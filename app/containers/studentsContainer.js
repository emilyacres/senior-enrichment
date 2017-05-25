import Students from '../components/Students';
import { connect } from 'react-redux';

const mapState = (state) => {
  return {
    students: state.students,
    campuses: state.campuses
  };
};

const studentsContainer = connect(mapState)(Students);

export default studentsContainer;
