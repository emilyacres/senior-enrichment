import React from 'react';
import { Link } from 'react-router';

export default function Home () {
  return (
    <div className="container-fluid">
      <div className="row homeLogo">
        <div className="col-lg-4">
        </div>
        <div className="col-lg-4">
          <img src="/planetary.png" />
        </div>
        <div className="col-lg-4">
        </div>
      </div>
      <div className="row headerLinks">
        <div className="col-lg-1">
        </div>
        <div className="col-lg-5">
          <Link to="/campuses">
            <h1>Our Campuses</h1>
          </Link>
        </div>
        <div className="col-lg-5">
          <Link to="/students">
            <h1>Our Students</h1>
          </Link>
        </div>
        <div className="col-lg-1">
        </div>
      </div>
    </div>
  )
}
