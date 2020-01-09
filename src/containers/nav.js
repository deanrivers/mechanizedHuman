import React, { Component } from 'react';
import robot from '../assets/robot.png';
import $ from 'jquery'

//import logoWords from '../assets/logo-words.png'
import logoWords from '../assets/svg/mh.svg'
import logoWordsMini from '../assets/svg/mh2.svg'

class Nav extends Component {
    
    render() {
        

        $(document).ready(function(){
            $('#logo-words-container').removeClass('whole-logo-reveal');
            $('#logo-words-container').removeClass('whole-logo-hide');

            window.addEventListener("scroll",function(event){
                var scroll = this.scrollY
                console.log(scroll)

                if(scroll > 50){
                    //add class
                    console.log('Scroll Triggered');
      
                    //add class
                    $('#whole-logo-container').addClass('whole-logo-hide'); 
                    $('#solo-logo-container').addClass('solo-logo-reveal'); 
                    $('#nav-container').addClass('nav-animation-forward');

                    //remove class
                    $('#whole-logo-container').removeClass('whole-logo-reveal');
                    $('#solo-logo-container').removeClass('solo-logo-hide');
                    $('#nav-container').removeClass('nav-animation-backward');

                } else if(scroll <= 50){
                    //add classes
                    $('#whole-logo-container').addClass('whole-logo-reveal');
                    $('#solo-logo-container').addClass('solo-logo-hide');
                    $('#nav-container').addClass('nav-animation-backward');
                    
                    //remove classes
                    $('#whole-logo-container').removeClass('whole-logo-hide');
                    $('#nav-container').removeClass('nav-animation-forward');
                    
                    // setTimeout(function(){ 
                        $('#solo-logo-container').css('display' , 'none'); 
                    // }, 1000);
                }
            })
            

        })
        
        return (
            <div id="nav-container">
                <div id="logos-container">
                    <div id="whole-logo-container">
                        <img src={logoWords} id="logo-words-image" className="svg-headers"></img>

                    </div>
                    <div id="solo-logo-container">
                        <img src={logoWordsMini} id="logo-words-image-mini" className="svg-headers"></img>
                    </div>
                </div>
            </div>
        );
    }
}
export default Nav