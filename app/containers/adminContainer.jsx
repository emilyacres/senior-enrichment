import Admin from '../components/Admin';
import { connect } from 'react-redux';
import { destroyCampus } from '../action-creators'

const mapState = (state) => {
  //console.log(state)
  return {
    campuses: state.campuses
  };
};

const mapDispatch = (dispatch) => {
  return {
    destroyCampus: (campusId) => {
      dispatch(destroyCampus(campusId));
    }
  };
};

const adminContainer = connect(mapState, mapDispatch)(Admin);

export default adminContainer;
