import React, { Component } from 'react'
import lottie from 'lottie-web'

//import * as animationData from 'https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json'
// import * as animationData from './data.json'
//import { animation } from './animation.js'

class Loader extends Component {
    
    componentDidMount(){
        var element = document.getElementById('pre-loader-container')
        console.log(element)

        lottie.loadAnimation({
            container: element, // the dom element that will contain the animation
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: 'https://api.myjson.com/bins/1eaems'// the path to the animation json
            //path: 'https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json' // the path to the animation json
        });
    }

    render() {
        return (
            <div id="pre-loader-container">


            </div>
        );
    }
}
export default Loader;
