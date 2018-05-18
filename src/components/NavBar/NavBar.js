import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg main-nav">
        <a class="navbar-brand" href="#">ALVARO MARTINEZ</a>
          Developer
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">Quien Soy</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">Portafolio</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">Contactame</a>
            </li>
          </ul>
          <ul class="social-media">
            <li>
              <a class="twitter"> <i class="fa fa-twitter" aria-hidden="true"></i> </a>
            </li>
            <li>
              <a class="facebook"> <i class="fa fa-facebook" aria-hidden="true"></i> </a>
            </li>
          </ul>
      </div>
    </nav>
    );
  }
}

export default NavBar;
