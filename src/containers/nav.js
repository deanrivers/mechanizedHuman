import React, { Component } from 'react';
import robot from '../assets/robot.png';
import axios from 'axios';

const fetchFeed = () => {
  //axios.get("https://phys.org/rss-feed/breaking/technology-news/")
  axios.get("/api/hello")
    .then( response => {
      console.log(response)
    })
}

class Nav extends Component {
    render() {

        fetchFeed()
        
        return (
            <div id="nav-container">
                <div id="nav-flex">

                    <div id="robot-container">
                        <img id="robot-image" src={robot} alt="Robot"></img>
                    </div>


                </div>




            </div>
        );
    }
}
export default Nav;