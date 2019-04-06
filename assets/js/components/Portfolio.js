import React, { Component } from 'react';
import portfolioData from './data/portfolioData';

export default class Portfolio extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
		this.loopProject = this.loopProject.bind(this);
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

	render() {
		return (
			<div>
				<div className="slanted-triangle-top" />

				<div className="portfolio-heading">
					<p>02</p>
					<h1>Work</h1>
				</div>
				<div className="work">
					<div className="project-section">{this.loopProject()}</div>
				</div>
				<div className="slanted-triangle-bottom" />
			</div>
		);
	}
}
