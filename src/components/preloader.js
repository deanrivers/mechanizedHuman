import React, {Component} from 'react'
import lottie from 'lottie-web'
import Lottie from 'react-lottie'

//import * as animationData from 'https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json'
// import * as animationData from './data.json'
//import { animation } from './animation.js'



//import video
import video from '../assets/ex1.mp4'



class Loader extends Component {
    constructor(props){
        super(props);
    
        this.state = {
            
        };
    }


    render(){
    
    var element = document.getElementById('pre-loader-container')

    lottie.loadAnimation({
        container: element, // the dom element that will contain the animation
        renderer: 'svg',
        loop: false,
        autoplay: true,
        path: 'https://api.myjson.com/bins/xo2ic'// the path to the animation json
        //path: 'https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json' // the path to the animation json
    });



    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true, 
    //     animationData: 'https://labs.nearpod.com/bodymovin/demo/markus/isometric/markus2.json',
    //     rendererSettings: {
    //     preserveAspectRatio: 'xMidYMid slice'
    //     }
    // };


        return(
            <div id="pre-loader-container">
               
            
            </div>
        );
    }
}
export default Loader;

    

    


