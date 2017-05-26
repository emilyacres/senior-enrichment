import React from 'react';
import { Link } from 'react-router';

export default function Campus (props) {
  console.log(props)
  const campuses = props.campuses;
  const students = props.students;
  const selectedCampus = props.selectedCampus;

  const findStudents = (campus) => {
    const myStudents = students.filter(student => {
      return +campus.id === +student.campus_id;
    })
    return myStudents;
  };

  return (
    <div className="row">
      <div className="col-lg-2">
      </div>
      <div className="col-lg-4">
        <h2 className="header">{selectedCampus.name} Campus</h2>
        <h3>{selectedCampus.galaxy} Galaxy</h3>
        <h4 className="solar">{selectedCampus.system} Solar System</h4>
        <h4 className="enrollment">Current enrollment {findStudents(selectedCampus).length} students</h4>
      </div>
      <div className="col-lg-4 planetTxt">
        <img src={selectedCampus.image} className="campusImg" />
        <small>Planet {selectedCampus.name}</small>
      </div>

      <div className="col-lg-2">
      </div>
    </div>
  );
}
