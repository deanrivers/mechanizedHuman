import React, { Component } from 'react';



var max_chars = 160;

class Contact extends Component {

    
    increment(event){
        
        
        let textLength = event.target.value.length;
        
        this.setState({ charactersRemaining: max_chars - textLength});
        


    }


    constructor(props){
        super(props);
        this.state={
            charactersRemaining: 160,
            charatctersEntered: 0,
        };
        this.increment = this.increment.bind(this);
    }

    

    render(){
        return(
            <div id="contact-container">
                <form id="contact-form">
                    <input id="name-field" className="text-field" type="text" name="firstname" placeholder="Name"></input>
                    
                    <input className="text-field" type="email" name="email" placeholder="Email"></input>
                    
                    <textarea id="message-area" className="text-field" onKeyUp={this.increment} maxLength="160" type="message" name="message" placeholder="Message..."></textarea>
                    <span id="character-count">You have {this.state.charactersRemaining} charatcters remaming.</span>
                    <button id="submit-button">Submit</button>
                    

                    
                </form>
                
                
                
                
            
            </div>
        );
    }
}
export default Contact;