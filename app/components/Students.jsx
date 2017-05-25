import React from 'react';
import { Link } from 'react-router';

export default function Students (props) {
  const students = props.students;
  const campuses = props.campuses;
  console.log(students)

  const findCampus = (student) => {
    const myCampus = campuses.filter(campus => {
      return +student.campus_id === +campus.id;
    })
    return {
      name: myCampus[0].name,
      id: myCampus[0].id
    };

  }

  return (
    <div>
      <div className="row">
        <div className="col-lg-1">
        </div>
          <div className="col-lg-10">
            <h3>Our Students</h3>
            <img src="/classstudent.jpg" className="studentImg" />
            <ul>
              {
                students && students.map( student => (
                  <li key={ student.id }>
                    <div className="caption">
                      <Link to={`/students/${student.id}`}>
                        <h4>
                          <span>{ student.name }</span>
                        </h4>
                      </Link>
                      <Link to={`/campuses/${findCampus(student).id}`}>
                        <small>
                          { findCampus(student).name } Campus
                        </small>
                      </Link>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        <div className="col-lg-1">
        </div>
      </div>
    </div>
  );
}
