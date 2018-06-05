import React, { Component } from 'react';
import PresentationCard from './PresentationCard/PresentationCard';
import PersonalHistory from '../../actions/PersonHistory';
import Ability from '../../actions/Ability';

import Portafolio from './Portafolio/Portafolio';
import TimeLine from './TimeLine/TimeLine';

class Body extends Component {

  constructor(cVInformation){
    super();
  }


  initInformation(){
    this.cVInformation = new PersonalHistory();
    
    this.cVInformation.names = "Alvaro";
    this.cVInformation.lastNames = "Martinez";
    this.cVInformation.description = "I am a Software Engineer with experience in web developing and code writing."; 
    this.cVInformation.description += " I am interested in Clean code and design patterns. I like to interact directly with the final user, so I always like to learn JavaScript,";
    this.cVInformation.description += " CSS, HTML5 and web UI modern technologies. Also, I am passionate about creating video games: Unity, User Experience, C#.";

    this.initPortafolioInformation(); 
  }


  initPortafolioInformation(){
    let personalAbility = new Ability();
    personalAbility.title = "Front-End Dev";
    personalAbility.description = "Manage HTML5, CSS3 and JS techonologies. Also interested in techonoligies like Angular and React.";
    personalAbility.description += "participate like an active member in communities like Angular Medellin, CaliJS";
    personalAbility.img =  require('../../assets/front_end.png');    
    this.cVInformation.abilities.push(personalAbility); 

    personalAbility = new Ability();
    personalAbility.title = "Logical think";
    personalAbility.description = "A formal model of the planing a solution of any problem. Mathematician and Scientist Computer thinking.";
    personalAbility.img =  require('../../assets/best-practice.jpg');    
    this.cVInformation.abilities.push(personalAbility); 

    personalAbility = new Ability();
    personalAbility.title = "Best Practices";
    personalAbility.description = "Use of standards to write clean code. Kwnoledege about patterns designs and architectures.";
    personalAbility.img =  require('../../assets/algorithms_new.jpg');    
    this.cVInformation.abilities.push(personalAbility); 
  }

  render() {

    this.initInformation();

    return (
      <div className="body-content">
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1">
              <div className="row">
                 <PresentationCard description = {this.cVInformation.description} />
              </div>
              <Portafolio personalAbilities = {this.cVInformation.abilities} />
            </div>
          </div>
          <div className="row">
            <div className="col-10 offset-1">
              <TimeLine />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
