import Campus from '../components/Campus';
import { connect } from 'react-redux';

const mapState = (state) => {
  return {
  };
};

const campusContainer = connect(mapState)(Campus);

export default campusContainer;
