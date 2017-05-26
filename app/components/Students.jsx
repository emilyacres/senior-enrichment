import React from 'react';
import { Link } from 'react-router';
import {React_Bootstrap_Carousel} from 'react-bootstrap-carousel';
// import 'react-bootstrap-carousel/dist/bootstrap.min.css';
// import 'react-bootstrap-carousel/dist/react-bootstrap-carousel.css';

export default function Students (props) {
  const students = props.students;
  const campuses = props.campuses;

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
            <h2 className="header">Our Students</h2>
            <React_Bootstrap_Carousel
            animation={true}
            className="carousel-fade"
            >
              <div className="cImg">
                <img src="students/startrek.jpg" />
              </div>
              <div className="cImg">
                <img src="students/Futurama.png" />
              </div>
              <div className="cImg">
                <img src="students/alien.jpg" />
              </div>
          </React_Bootstrap_Carousel>
            <ul id="studentList">
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





          // <div id="studentCarousel" class="carousel slide" data-ride="carousel">
          //     <div class="carousel-inner" role="listbox">
          //       <div class="carousel-item active">
          //         <img class="d-block img-fluid" src="/students/startrek.jpg" alt="First slide" />
          //       </div>
          //       <div class="carousel-item">
          //         <img class="d-block img-fluid" src="/students/Futurama.png" alt="Second slide" />
          //       </div>
          //       <div class="carousel-item">
          //         <img class="d-block img-fluid" src="/students/alien.jpg" alt="Third slide" />
          //       </div>
          //     </div>
          //   </div>
