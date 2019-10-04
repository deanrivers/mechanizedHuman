import React, { Component } from 'react';
import robot from '../assets/robot.png';

//import logoWords from '../assets/logo-words.png'
import logoWords from '../assets/svg/mh.svg'

class Nav extends Component {
    render() {
        
        return (
            <div id="nav-container">
                <div id="nav-flex">
                    <div id="logo-words-container">
                        <img src={logoWords} id="logo-words-image" className="svg-headers"></img>
                    </div>
                    
                    {/* <div id="robot-container">
                        <img id="robot-image" src={robot} alt="Robot"></img>
                    </div> */}
                    


                </div>




            </div>
        );
    }
}
export default Nav;