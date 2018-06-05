import React, { Component } from 'react';
import NavBar from './components/NavBar/NavBar.js';
import Body from './components/Body/Body';
import 'bootstrap/dist/css/bootstrap.min.css';
import './font-awesome/css/fontawesome-all.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="presentation animated fadeIn slow">
        <NavBar />
        <Body />
      <div className="footer">
        Alvaro Martinez 2018 - Copyrigth
      </div>
    </div>

    );
  }
}

export default App;
