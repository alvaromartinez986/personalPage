import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar.js'
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
        <NavBar />
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
                <h2>
                  2015
                </h2>
                <h4 class="timeline-title">
                  Working on that place
                </h4>
                <p class="timeline-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae commodo nisi. In eu eros nisl. Aenean faucibus est eget quam tincidunt,
                  in pulvinar elit blandit. Mauris mi lacus, dignissim vitae massa ac, rhoncus mollis erat. Donec ut consectetur est. Morbi sagittis, diam 
                </p>
                </div>
                <div class="time-line-year">
                <div class="swiper-button-prev">
                </div>
                <span class="swiper-pagination-bullet">2015</span>
                <div class="swiper-button-next">
                </div>
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
