import React from 'react';
import { Link } from 'react-router';


export default function Student (props) {
  const destroyCampus = props.destroyCampus
  const campuses = props.campuses;

  let campusToDestroy;

  const handleChange = (event) => {
    campusToDestroy = event.target.value;
  }

  const handleDelete = (event) => {
    destroyCampus(campusToDestroy)
  }


  return (
    campuses.length ? (

    <div className="row">
      <h2>Admin Delete Campus</h2>
      <form className="form-group" onSubmit={handleDelete}>
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

    ) : null
  )
}
