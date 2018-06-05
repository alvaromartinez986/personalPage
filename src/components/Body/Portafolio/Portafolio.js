import React, { Component } from 'react';
import Ability from '../../../actions/Ability';

import ItemPortafolio from './ItemPortafolio'
import front_end from '../../../assets/front_end.png';
import best_practices from '../../../assets/best-practice.jpg';
import algorithms from '../../../assets/algorithms_new.jpg';

class Portafolio extends Component {

  constructor(personalAbilities){
    super();
    this.personalAbilities = personalAbilities.personalAbilities;
  }
  
  render() {

    const items = this.personalAbilities.map((ability)=>
    <ItemPortafolio key={ability.title} ability = {ability} />
    );

    return (
      <div className="row">
        { items }
      </div>
    );
  }


}

export default Portafolio;
