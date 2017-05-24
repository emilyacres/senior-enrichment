import React, {Component} from 'react';
import {Link} from 'react-router';


export default function NavBar () {
  return (
    <nav className="navbar navbar-default navbar-fixed-top">
      <div className="container-fluid">
        <ul className="nav navbar-left navbar-nav">
          <li><Link to = '/'><img src="/logo.png" id="logo" className="img-responsive"/> </Link></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li className="navbar-brand"><Link to="/campuses">Our Campuses</Link></li>
          <li className="navbar-brand"><Link to="/students">Our Students</Link></li>
        </ul>
      </div>
    </nav>
  )
}
