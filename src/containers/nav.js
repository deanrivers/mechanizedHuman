import React, { Component } from 'react';
import robot from '../assets/robot.png';


class Nav extends Component {
    render() {
        
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