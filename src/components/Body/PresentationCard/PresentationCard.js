import React, { Component } from 'react';
import alvaro from '../../../assets/alvaro1.png';

class PresentationCard extends Component {
  
  constructor(description){
    super();
    this.description = description;
  }

  render() {

    return (
        <div className="col-12 presentation-card">
          <div className="wrapped">
            <img src={alvaro} />
              {this.props.description}
          </div>
        </div>
    );
  }
}

export default PresentationCard;
