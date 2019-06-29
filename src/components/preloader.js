import React from 'react';

//import video
import video from '../assets/ex1.mp4';

let Loader = () => {
    return (
        <div id="pre-loader-container">
            <video id="video" autoPlay loop muted src={video}></video>
        </div>
    );
}

export default Loader;