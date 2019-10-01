import React, { Component } from 'react';

//image
import questionMarks from '../assets/question.png'
class Summary extends Component {
    render(){
        return(
            <div id="summary-container">
                <img src={questionMarks} id="question-image"/>
                <p id="header">What is <span id="mhuman">Mechanized Human?</span></p>
                <p>
                Summary: mechanized human is a free source of robotics news and media.
                It serves to aggregate information, celebrate innovation, and promote a
                future of robotics integrated societies.       
                </p>
               
            </div>
        );
    }
}
export default Summary;