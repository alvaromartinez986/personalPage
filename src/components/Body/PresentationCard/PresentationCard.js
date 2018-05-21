import React, { Component } from 'react';
import alvaro from '../../../assets/alvaro1.png';

class PresentationCard extends Component {
  render() {
    return (
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
    );
  }
}

export default PresentationCard;
