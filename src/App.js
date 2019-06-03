import React, { Component } from 'react';
import Content from './containers/content';
import VideoPlayer from './components/videoPlayer'
import Loader from './components/preloader';
import $ from 'jquery';

import './App.css';

import Nav from './containers/nav';
import Countdown from './components/countdown';
import axios from 'axios';
import NewsFeed from './components/newsFeed';

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      feed : "LOADING"
    }
  }

  render() {

    //logic for pre loader
    $( document ).ready(function() {
      var main = $('#main');
      var preLoader = $('#pre-loader-container');
      var video = $('#video');
      var nav = $('#nav-container');
      

      //inital display during animation
      main.css("display","block");
      
      
      //after animation has played out swap displays
      setTimeout( function(){
        
        // main.css("display","block");
        // preLoader.css("display","none");

        main.fadeIn('fast');
        preLoader.fadeOut('fast');
        
        
      },2000)
    
    });

    // get data for National Robot Day (4/4)
    const currentDate = new Date();
    let year = (currentDate.getMonth() > 3 && currentDate.getDate() > 4) ? currentDate.getFullYear() + 1 : currentDate.getFullYear();
    
    return (
      <div className="App">
        {/* <Loader/> */}
        <div id="main">
          <Nav/>
          <div id="grid">
            <div className="main-containers" id="headline">
              
            <Content content="tese" text="Headline" padding="0px" float="left" color="#97FAE9"/>
              


  
            
            </div>

            <div className="main-containers" id="countdown">
              
           

            <Content text="Countdown" 
            content={<Countdown date={`${year}-04-04T00:00:00`} />}            
            padding="0px" float="right" color="#97FAE9"/>
            
         
            </div>

            <div className="main-containers" id="summary"><Content text="Summary" padding="0px" float="right" color="#FFFFFF"/></div>
            <div className="main-containers" id="news-feed"><Content id="countdown-contatiner" text="News Feed" padding="0px" float="left" color="#FF7441"/></div>
            <div className="main-containers" id="videos"><Content text="Robot Videos" content={<VideoPlayer/>}padding="0px" float="right" color="#FFFDC6"/></div>
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
