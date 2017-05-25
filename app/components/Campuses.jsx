import React from 'react';
import { Link } from 'react-router';

export default function Campuses (props) {
  const campuses = props.campuses;
  console.log(campuses)
  return (
    <div>
      <h3>Our Campuses</h3>
      <div className="row">
        {
          campuses && campuses.map( campus => (
            <div className="col-xs-4" key={ campus.id }>
              <Link className="thumbnail" to={`/campuses/${campus.id}`}>
                <img src={ campus.image }/>
                <div className="caption">
                  <h4>
                    <span>{ campus.name } Campus</span>
                  </h4>
                </div>
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}
