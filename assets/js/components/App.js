import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Portfolio from './Portfolio';
import data from './data/data';
import scrollToComponent from 'react-scroll-to-component';

class App extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}

	componentDidMount() {
		// Init
		var container = document.getElementById('container'),
			inner = document.getElementById('inner');

		// Mouse
		var mouse = {
			_x: 0,
			_y: 0,
			x: 0,
			y: 0,
			updatePosition: function(event) {
				var e = event || window.event;
				this.x = e.clientX - this._x;
				this.y = (e.clientY - this._y) * -1;
			},
			setOrigin: function(e) {
				this._x = e.offsetLeft + Math.floor(e.offsetWidth / 2);
				this._y = e.offsetTop + Math.floor(e.offsetHeight / 2);
			},
			show: function() {
				return '(' + this.x + ', ' + this.y + ')';
			}
		};

		// Track the mouse position relative to the center of the container.
		mouse.setOrigin(container);

		//----------------------------------------------------

		var counter = 0;
		var refreshRate = 10;
		var isTimeToUpdate = function() {
			return counter++ % refreshRate === 0;
		};

		//----------------------------------------------------

		var onMouseEnterHandler = function(event) {
			update(event);
		};

		var onMouseLeaveHandler = function() {
			inner.style = '';
		};

		var onMouseMoveHandler = function(event) {
			if (isTimeToUpdate()) {
				update(event);
			}
		};

		//----------------------------------------------------

		var update = function(event) {
			mouse.updatePosition(event);
			updateTransformStyle(
				(mouse.y / inner.offsetHeight / 2).toFixed(2),
				(mouse.x / inner.offsetWidth / 2).toFixed(2)
			);
		};

		var updateTransformStyle = function(x, y) {
			var style = 'rotateX(' + x + 'deg) rotateY(' + y + 'deg)';
			inner.style.transform = style;
			inner.style.webkitTransform = style;
			inner.style.mozTranform = style;
			inner.style.msTransform = style;
			inner.style.oTransform = style;
		};

		//--------------------------------------------------------

		container.onmousemove = onMouseMoveHandler;
		container.onmouseleave = onMouseLeaveHandler;
		container.onmouseenter = onMouseEnterHandler;
	}

	render() {
		return (
			<div className="container">
				<section id="home">
					<header>
						<nav>
							<li>
								<a
									href="#"
									onClick={() =>
										scrollToComponent(this.About, {
											offset: 0,
											align: 'top',
											duration: 1500
										})
									}
								>
									About
								</a>
							</li>
							<li>
								<a
									href="#"
									onClick={() =>
										scrollToComponent(this.Portfolio, {
											offset: 0,
											align: 'top',
											duration: 1500
										})
									}
								>
									Portfolio
								</a>
							</li>
							<li>
								<a
									href="#"
									onClick={() =>
										scrollToComponent(this.Contact, {
											offset: 0,
											align: 'top',
											duration: 1500
										})
									}
								>
									Contact
								</a>
							</li>
						</nav>
					</header>
					<div className="home-text" id="container">
						<h1>
							JOSEF <br /> <span>ADLAO</span>
						</h1>
						<h3>Web developer</h3>
						<img id="inner" src="https://i.ibb.co/kXZ01Gp/birds.png" />
					</div>
					<div className="slanted-triangle-bottom" />
				</section>

				<section
					id="about"
					ref={section => {
						this.About = section;
					}}
				>
					<div className="about-heading">
						<p>01</p>
						<h1>About Me</h1>
					</div>

					<div className="skills">
						<i className="devicon-javascript-plain colored" />
						<i className="devicon-jquery-plain-wordmark colored" />
						<i className="devicon-react-original-wordmark colored" />
						<i className="devicon-sass-original colored" />
						<i className="devicon-php-plain colored" />
						<i className="devicon-mysql-plain-wordmark colored" />
						<i className="devicon-wordpress-plain-wordmark colored" />
					</div>
					<div className="about-text">
						<h4>{data[1].about_h4text}</h4>
						<p>{data[1].about_text}</p>
					</div>
				</section>

				<section
					id="portfolio"
					ref={section => {
						this.Portfolio = section;
					}}
				>
					<Portfolio />
				</section>

				<section
					id="contact"
					ref={section => {
						this.Contact = section;
					}}
				>
					<div className="contact-heading">
						<p>03</p>
						<h1>Contact</h1>
					</div>
					{/* <p>
						<a href="mailto:josef@josefadlao.com">josef@josefadlao.com</a>
					</p> */}
					<div className="social">
						{/* <a href="https://www.instagram.com/josef.codes/">
							<i className="fab fa-instagram" />
						</a> */}
						<a href="https://twitter.com/josefadlao">
							<i className="fab fa-twitter-square" />
						</a>
						<a href="https://github.com/jadlao">
							<i className="fab fa-github" />
						</a>
						<a href="https://www.linkedin.com/in/josefadlao/">
							<i className="fab fa-linkedin" />
						</a>
					</div>
					<hr />
				</section>

				<footer>&copy; 2020 Copyright. Josef Adlao</footer>
			</div>
		);
	}
}

const app = document.getElementById('app');

ReactDOM.render(<App />, app);
