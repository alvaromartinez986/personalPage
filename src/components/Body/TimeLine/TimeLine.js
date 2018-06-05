import React, { Component } from 'react';

class TimeLine extends Component {
  render() {
    return (
      <div className="time-line">
        <div className="time-line-content">
          <h2>
            2015
          </h2>
          <h4 className="timeline-title">
            Working on that place
          </h4>
          <p className="timeline-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vitae commodo nisi. In eu eros nisl. Aenean faucibus est eget quam tincidunt,
            in pulvinar elit blandit. Mauris mi lacus, dignissim vitae massa ac, rhoncus mollis erat. Donec ut consectetur est. Morbi sagittis, diam 
          </p>
        </div>
        <div className="time-line-year">
            <div className="swiper-button-prev">
            </div>
            <span className="swiper-pagination-bullet">2015</span>
            <div className="swiper-button-next">
            </div>
        </div>
    </div>
    );
  }
}

export default TimeLine;
