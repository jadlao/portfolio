import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import data from './../App/data/data';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="profile-section">
        <div className="profile">
          <h1>Josef Adlao</h1>
          <h5>{data[1].job_title}</h5>
          <p>{data[1].home_text}</p>
          <Link className="primary-btn" to="/portfolio">
            <span>Portfolio</span>
          </Link>
          <Link className="ghost-btn" to="/contact">
            <span>Contact</span>
          </Link>
        </div>
      </div>
    );
  }
}
