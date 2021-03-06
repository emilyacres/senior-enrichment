import React from 'react';
import { Link } from 'react-router';

export default function Student (props) {

  return (
    <div>
      <div className="row thanks">
        <div className="col-lg-3">
        </div>
        <div className="col-lg-6">
          <h1 className="text-warning">Congratulations on graduating from Margaret Hamilton Interplanetary Academy!</h1>
          <h3 className="text-success">Best of luck and many thanks from everyone at</h3>
          <img src="/logo.png" className="thanksLogo" />
        </div>
        <div className="col-lg-3">
        </div>
      </div>
      <div className="row">
        <div className="col-lg-5">
        </div>
        <div className="col-lg-2 homeButton">
          <Link to="/"><button className="btn btn-primary backToHome">Back to home</button></Link>
        </div>
        <div className="col-lg-5">
        </div>
      </div>
    </div>
  )
}
