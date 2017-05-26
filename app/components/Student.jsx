import React from 'react';
import { Link, hashHistory  } from 'react-router';



export default function Student (props) {
  const deleteStudent = props.deleteStudent;
  const updateStudent = props.updateStudent;
  const selectedStudent = props.selectedStudent;
  const campuses = props.campuses;
  let newCampus;
  //console.log(selectedStudent);
  const findCampus = (student) => {
    const myCampus = campuses.filter(campus => {
      return +student.campus_id === +campus.id;
    })
    return {
      name: myCampus[0].name || 'Remote',
      id: myCampus[0].id || ''
    };
  };


  const handleDelete = (event) => {
    deleteStudent(selectedStudent);
    hashHistory.push('/congratulations');
  }

  const handleChange = (event) => {
    newCampus = event.target.value;
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    const updateObj = {
      campus: newCampus,
      student: selectedStudent.id
    }
    updateStudent(updateObj);

  }

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
          <div className="buttons">
            <div>
              <p>Looking for a new frontier?</p>
              <form className="form-group" onSubmit={handleUpdate}>
                <div className="form-group" id="campusMenu">
                  <select className="form-group" onChange={handleChange}>
                  {
                     campuses.map(campus => (
                        <option value={campus.id} key={campus.id}>{campus.name}</option>
                      ))
                  }
                  </select>
                  <button type="submit" className="btn btn-info campusButton">Switch campus</button>
                </div>
              </form>
            </div>
            <div>
              <h4 className="graduate">Ready to graduate?</h4>
              <div className="form-group" onClick={handleDelete}>
                <button type="submit" className="btn btn-warning btn-lg">Unenroll</button>
              </div>
            </div>
            <div>
            </div>
          </div>
      </div>
      <div className="col-lg-2">
      </div>
    </div>

    ) : null
  )
}
