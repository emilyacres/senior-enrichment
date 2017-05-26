import React from 'react';
import { Link } from 'react-router';

//console.log(state)
export default function Student (props) {
  const selectedStudent = props.selectedStudent;
  const campuses = props.campuses;
  //console.log(selectedStudent);
  const findCampus = (student) => {
    const myCampus = campuses.filter(campus => {
      return +student.campus_id === +campus.id;
    })
    return {
      name: myCampus[0].name,
      id: myCampus[0].id
    };
  };

  return (
    selectedStudent.name ? (

    <div className="row">
      <div className="col-lg-2">
      </div>
      <div className="col-lg-4">
        <img src={selectedStudent.profile} />
      </div>
      <div className="col-lg-4 studentProfile">
          <div className="studentTitle">
            <h2 className="header">{selectedStudent.name}</h2>
            <Link to={`/campuses/${findCampus(selectedStudent).id}`}>
              <h4>{findCampus(selectedStudent).name} Campus</h4>
            </Link>
          </div>
          <div>
            <p>
              {selectedStudent.bio}
            </p>
          </div>
      </div>
      <div className="col-lg-2">
      </div>
    </div>

    ) : null
  )
}
