import Campuses from '../components/Campuses';
import { connect } from 'react-redux';

const mapState = (state) => {
  //console.log(state)
  return {
    campuses: state.campuses
  };
};

const campusesContainer = connect(mapState)(Campuses);

export default campusesContainer;
