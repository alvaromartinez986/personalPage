import React, { Component } from 'react';
import front_end from '../../../assets/front_end.png';
import best_practices from '../../../assets/best-practice.jpg';
import algorithms from '../../../assets/algorithms_new.jpg';

class Portafolio extends Component {
  render() {
    return (
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
    );
  }
}

export default Portafolio;
