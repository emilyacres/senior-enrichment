import Student from '../components/Student';
import { connect } from 'react-redux';

const mapState = (state) => {
  return {
  };
};

const studentContainer = connect(mapState)(Student);

export default studentContainer;
