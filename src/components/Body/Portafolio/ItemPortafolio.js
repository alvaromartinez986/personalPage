import React, { Component } from 'react';
import Ability from '../../../actions/Ability';


class ItemPortafolio extends Component {

  constructor(ability){
    super();
    this.ability = ability.ability;
  }
  
  render() {
    return (
    <div className = "col-4">
      <div className = "portafolio-card">
        <img src={this.ability.img} className="img-fluid"/>
      </div>
      <div className ="portafolio-description">
        <h2>{this.ability.title}</h2>
        {this.ability.description}
      </div>
    </div>
    );
  }
}

export default ItemPortafolio;
