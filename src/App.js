import React, { Component } from 'react';
import logo from './logo.svg';
import alvaro from './alvaro1.png'
import front_end from './front_end.png'
import best_practices from './best-practice.jpg'
import algorithms from './algorithms_new.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import './font-awesome/css/fontawesome-all.min.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div class="presentation">
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
      <div class="container">
        <div class="row">
          <div class="col-10 offset-1">
            <div class="row">
              <div class="col-12 presentation-card">
                <div class="wrapped">
                  <img src={alvaro} />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed tincidunt quam. Nam sit amet quam molestie, laoreet nibh non, egestas elit.
                    Sed ut massa eget mauris condimentum ornare. Phasellus at tincidunt quam, et congue lectus. In mattis dolor in tellus volutpat venenatis.
                    <br/>
                    <br/>
                    Nullam pellentesque rutrum ligula, quis luctus urna fermentum quis. Nam interdum rhoncus posuere.
                    Pellentesque vel dapibus dui, ac ornare tellus. Ut dolor dolor, sodales sed porttitor nec, fringilla a arcu.
                    Donec pulvinar nisi ut urna ultrices, in auctor libero posuere. Sed ut tellus in ipsum euismod eleifend eu sit amet erat.
                </div>
              </div>
            </div>
            <div class="row">
              <div class = "col-4">
                <div class = "portafolio-card">
                  <img src={front_end} class="img-fluid"/>
                </div>
                <div class ="portafolio-description">
                  <h2>Logical thinking</h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nisi et pellentesque imperdiet, nibh tortor vehicula odio, vel tempus purus libero non magna.
                </div>
              </div>
              <div class = "col-4">
                <div class ="portafolio-card">
                  <img src={algorithms} class="img-fluid"/>
                </div>
                <div class ="portafolio-description">
                  <h2>Logical thinking</h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nisi et pellentesque imperdiet, nibh tortor vehicula odio, vel tempus purus libero non magna.
                </div>
              </div>
              <div class = "col-4">
                <div class = "portafolio-card">
                  <img src={best_practices} class="img-fluid"/>
                </div>
                <div class ="portafolio-description">
                  <h2>Logical thinking</h2>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis accumsan, nisi et pellentesque imperdiet, nibh tortor vehicula odio, vel tempus purus libero non magna.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-10 offset-1">
            <div class="time-line">
              <div class="time-line-content">
              content
              </div>
              <div class="time-line-year">
              ^
              <br/>
              2015
              </div>
              <div class="swiper-button-next">
              </div>
              <div class="swiper-button-prev">
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">
        Alvaro Martinez 2018 - Copyrigth
      </div>
    </div>

    );
  }
}

export default App;
