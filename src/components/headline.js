import React, { Component } from 'react';


import robotImage from '../assets/RobotNinja.png'
import headline from '../assets/headline.png'

class Headline extends Component {
    render(){
        return(
            <div id="headline-container">

                <img id="headline-words" src={headline}></img>
                <img id="headline-image" src={robotImage}></img>
            </div>
        );
    }
}
export default Headline;