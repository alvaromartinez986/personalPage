import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg main-nav">
        <a className="navbar-brand" href="#">ALVARO MARTINEZ</a>
          Developer
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Quien Soy</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Portafolio</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#">Contactame</a>
            </li>
          </ul>
          <ul className="social-media">
            <li>
              <a className="twitter"> <i className="fa fa-twitter" aria-hidden="true"></i> </a>
            </li>
            <li>
              <a className="facebook"> <i className="fa fa-facebook" aria-hidden="true"></i> </a>
            </li>
          </ul>
      </div>
    </nav>
    );
  }
}

export default NavBar;
