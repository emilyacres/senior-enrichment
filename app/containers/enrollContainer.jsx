import Enroll from '../components/Enroll';
import { connect, browserHistory } from 'react-redux';
import { postStudent } from '../action-creators'
import React, { Component } from 'react';

const mapState = (state) => {
    return{
      campuses: state.campuses
    }
};

const mapDispatch = (dispatch) => {
  return {
    postStudent: (student) => {
      dispatch(postStudent(student));
    }
  };
};

class newStudentContainer extends Component {

  constructor (props) {
    super(props);
    this.state = {
      nameInput: '',
      emailInput: '',
      bioInput: '',
      campusId: '',
    };

    this.handleEmail = this.handleEmail.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleBio = this.handleBio.bind(this);
    this.handleCampus = this.handleCampus.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }


  handleEmail (event) {
    const value = event.target.value;
    this.setState({
      emailInput: value
    })
  }

  handleName (event) {
    const value = event.target.value;
    this.setState({
      nameInput: value
    })
  }

   handleBio (event) {
    const value = event.target.value;
    this.setState({
      bioInput: value
    })
  }

   handleCampus (event) {
    //event.preventDefault();
    const value = event.target.value;
    console.dir(value)
    // const campus = this.props.campuses.filter(campus => {
    //   return campus.name === value;
    // })

      this.setState({
        campusId: value
      })

  }

  handleSubmit (event) {
    const value = event.target.value;
    console.dir(value)
    const campus = this.props.campuses.filter(campus => {
      return campus.name === value;
    })

    //event.preventDefault();
    this.props.postStudent({
      name: this.state.nameInput,
      email: this.state.emailInput,
      bio: this.state.bioInput,
      campusId: this.state.campusId
    })
    browserHistory.push('/thanks')
  }

  render () {
      return (
          <Enroll
            campuses={this.props.campuses}
            handleEmail={this.handleEmail}
            handleName={this.handleName}
            handleBio={this.handleBio}
            handleCampus={this.handleCampus}
            handleSubmit={this.handleSubmit}
            nameInput={this.state.nameInput}
            emailInput={this.state.emailInput}
            bioInput={this.state.bioInput}
            campusId={this.state.campusId}
            />
      )
  }
}

const enrollContainer = connect(mapState, mapDispatch)(newStudentContainer);

export default enrollContainer;
