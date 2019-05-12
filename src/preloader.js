import React, { Component } from 'react';

//import video
import video from './assets/ex1.mp4';

class Loader extends Component {
    render(){
        return(
            <div id="pre-loader-container">
                <video id="video" autoPlay muted src={video}></video>
            </div>
        );
    }
}
export default Loader;