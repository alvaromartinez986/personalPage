import React, { Component } from 'react';
import PresentationCard from './PresentationCard/PresentationCard';
import Portafolio from './Portafolio/Portafolio';
import TimeLine from './TimeLine/TimeLine';

class Body extends Component {
  render() {
    return (
      <div class="body-content">
        <div class="container">
          <div class="row">
            <div class="col-10 offset-1">
              <div class="row">
              <PresentationCard />
              </div>
              <Portafolio />
            </div>
          </div>
          <div class="row">
            <div class="col-10 offset-1">
            <TimeLine />
            </div>
          </div>
      </div>
    </div>
    );
  }
}

export default Body;
