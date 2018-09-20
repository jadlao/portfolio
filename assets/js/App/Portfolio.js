import React, { Component } from 'react';
import './../App/data/portfolioData';
import './../App/data/portfolioEmail';
import portfolioData from './data/portfolioData';
import portfolioEmail from './data/portfolioEmail';

export default class Portfolio extends Component {
  constructor() {
    super();
    this.state = {};
    this.loopProject = this.loopProject.bind(this);
    this.loopEmail = this.loopEmail.bind(this);
  }

  loopProject() {
    return portfolioData.map((project, index) => {
      return (
        <div
          className="project-box"
          key={index}
          style={{
            background: `url("${project.image}") no-repeat center center`
          }}
        >
          <div className="grey-bg">
            <p>
              <a href={project.live_link} target="_blank">
                Live site
              </a>
            </p>
            <p>
              <a href={project.code_link} target="_blank">
                View code
              </a>
            </p>
            <p>Technologies: {project.technologies}</p>
            <h4>{project.title}</h4>
            <i className="fa fa-angle-right" />
          </div>
        </div>
      );
    });
  }

  loopEmail() {
    return portfolioEmail.map((project, index) => {
      return (
        <div
          className="project-box"
          key={index}
          style={{
            background: `url("${project.image}") no-repeat center center`
          }}
        >
          <div className="grey-bg">
            <p>
              <a href={project.live_link} target="_blank">
                Live site
              </a>
            </p>
            <p>
              <a href={project.code_link} target="_blank">
                View code
              </a>
            </p>
            <p>Technologies: {project.technologies}</p>
            <h4>{project.title}</h4>
            <i className="fa fa-angle-right" />
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="portfolio-section">
        <div className="portfolio">
          <div className="title">
            <h5>Latest works</h5>
          </div>
          <div className="work-section">
            {/* <h5>HTML Emails</h5> */}
            <div className="project-section">{this.loopEmail()}</div>
            <div className="project-section">{this.loopProject()}</div>
          </div>
        </div>
      </div>
    );
  }
}
