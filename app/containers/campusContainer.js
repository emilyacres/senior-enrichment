import Campus from '../components/Campus';
import { connect } from 'react-redux';

const mapState = (state) => {
  return {
    students: state.students,
    campuses: state.campuses,
    selectedCampus: state.selectedCampus
  };
};

const campusContainer = connect(mapState)(Campus);

export default campusContainer;
