import React from 'react';
import { Link } from 'react-router';

export default function Enroll (props) {
  const campuses = props.campuses;
  const handleEmail = props.handleEmail
  const handleName = props.handleName
  const handleBio = props.handleBio
  const handleCampus = props.handleCampus
  const handleSubmit = props.handleSubmit
  const nameInput = props.nameInput
  const emailInput = props.emailInput
  const bioInput = props.bioInput
  const campusId = props.campusId


  return (
    campuses.length ? (
    <div className="row">
    <h2 className="join header">Join our academy</h2>
      <form className="form-horizontal" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="col-sm-2 control-label">Name:</label>
          <div className="col-sm-8">
            <input value={nameInput} onChange={handleName} type="name" className="form-control" id="inputName" placeholder="Name" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Email:</label>
          <div className="col-sm-8">
            <input value={emailInput} onChange={handleEmail} type="email" className="form-control" id="inputEmail" placeholder="Email" />
          </div>
        </div>
        <div className="form-group">
          <label className="col-lg-2 control-label campusLabel">Select your campus:</label>
          <select className="form-group" onChange={handleCampus} value={campusId}>
          {
             campuses.map(campus => (
                <option value={campus.id} key={campus.id}>{campus.name}</option>
              ))
          }
          </select>
        </div>
        <div className="form-group">
          <label className="col-sm-2 control-label">Tell us about yourself:</label>
          <div className="col-sm-8">
            <textarea value={bioInput} onChange={handleBio} className="form-control" id="bio" placeholder="..." rows="5"></textarea>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-2 col-sm-10">
            <button type="Apply" className="btn btn-warning">Apply Now</button>
          </div>
        </div>
      </form>
    </div>

    ) : null
  )
}


