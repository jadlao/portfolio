import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch, HashRouter } from 'react-router-dom';
import data from './../App/data/data';
import Home from './Home';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Icon from 'svg-react-loader?name=Icon!../../../public/img/laptop-icon.svg';
import Hamburger from 'svg-react-loader?name=Hamburger!../../../public/img/hamburger.svg';
import Close from 'svg-react-loader?name=Close!../../../public/img/close.svg';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menu: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
    this.cancelMenu = this.cancelMenu.bind(this);
    this.switchIcons = this.switchIcons.bind(this);
  }

  toggleMenu() {
    const currentState = this.state.menu;
    this.setState(
      {
        menu: !currentState
      },
      () => {
        console.log(this.state);
      }
    );
  }

  cancelMenu() {
    this.setState({
      menu: false
    });
  }

  switchIcons() {
    switch (this.state.menu) {
      case true:
        return <Close className="close" />;
      case false:
        return <Hamburger className="hamburger" />;
      default:
        return <Hamburger className="hamburger" />;
    }
  }

  render() {
    return (
      <div className={`home ${this.state.menu ? 'menu-active' : ''}`}>
        <div className="top-nav-wrapper">
          <div className="menu-icon" onClick={this.toggleMenu}>
            {this.switchIcons()}
          </div>
        </div>

        <section id="menu">
          <nav>
            <Link className="menu-link" onClick={this.cancelMenu} to="/">
              <h5>Home</h5>
            </Link>
            <Link
              className="menu-link"
              onClick={this.cancelMenu}
              to="/portfolio"
            >
              <h5>Portfolio</h5>
            </Link>
            <Link className="menu-link" onClick={this.cancelMenu} to="/contact">
              <h5>Contact</h5>
            </Link>
          </nav>
        </section>
        <section className="info-section">
          <Link className="logo-link" to="/">
            <div className="logo">
              <Icon className="icon" />
            </div>
          </Link>
          <div className="info-box">
            <h5>Technologies</h5>
            <p>HTML5</p>
            <p>CSS3</p>
            <p>SASS</p>
            <p>Javascript (ES5, ES6)</p>
            <p>jQuery</p>
            <p>Bootstrap</p>
            <p>React</p>
            <p>Gulp</p>
            <p>PHP</p>
            <p>Laravel</p>
            <p>MySQL</p>
            <h5 className="contact">Email</h5>
            <p>
              <a href="mailto:josef@josefadlao.com" target="_blank">
                {data[0].info.email}
              </a>
            </p>
            <h5>Find Me On</h5>
            <div className="icon-section">
              <a href={data[0].info.twitter} target="_blank">
                <i className="fa fa-twitter" aria-hidden="true" />
              </a>
              <a href={data[0].info.github} target="_blank">
                <i className="fa fa-github" aria-hidden="true" />
              </a>
              <a href={data[0].info.linkedin} target="_blank">
                <i className="fa fa-linkedin" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
        <section className="content-area">
          <Route exact={true} path="/" component={Home} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </section>
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  app
);
