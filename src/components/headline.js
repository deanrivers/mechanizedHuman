import React, { Component } from 'react';


import robotImage from '../assets/RobotNinja.png'
import headline from '../assets/svg/headline.svg'
//import headlinImage from './assets/svg/headline.svg'

class Headline extends Component {
    render(){
        return(
            <div id="headline-container">

                <img id="headline-words" className="svg-headers" src={headline}></img>
                <img id="headline-image" src={robotImage}></img>
            </div>
        );
    }
}
export default Headline;