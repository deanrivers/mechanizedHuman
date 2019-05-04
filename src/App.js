import React, { Component } from 'react';
import Content from './content';
import './App.css';

import Nav from './nav';

class App extends Component {


  render() {

    
    return (
      <div className="App">
        <div id="main">
          
          <Nav/>
          <div id="grid">
            <div className="main-containers" id="headline"><Content text="Headline" padding="0px" float="left" color="#97FAE9"/></div>
            <div className="main-containers" id="countdown"><Content text="Countdown" padding="0px" float="right" color="#97FAE9"/></div>
            <div className="main-containers" id="summary"><Content text="Summary" padding="0px" float="right" color="#FFFFFF"/></div>
            <div className="main-containers" id="news-feed"><Content text="News Feed" padding="0px" float="left" color="#FF7441"/></div>
            <div className="main-containers" id="videos"><Content text="Videos" padding="0px" float="right" color="#FFFDC6"/></div>
            <div className="main-containers" id="twitter"><Content text="Twitter" padding="0px" float="right" color="#65A2D9"/></div>
            <div className="main-containers" id="contact"><Content text="Contact" padding="0px" float="left" color="#ACE4AA"/></div>
            <div className="main-containers" id="donate"><Content text="donate" padding="0px" float="left" color="white"/></div>
            <div className="main-containers" id="empty-donate-right"><Content text="empty" padding="0px" float="right" color="purple"/></div>
            <div className="main-containers" id="empty-donate-left"><Content text="empty" padding="0px" float="right" color="white"/></div>
            <div className="main-containers" id="donate2"><Content text="donate" padding="0px" float="right" color="orange"/></div>

          </div>
         
            
          


          
          
        </div>
        
      </div>
    );
  }
}

export default App; 
