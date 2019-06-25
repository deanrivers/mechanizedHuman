import React, { Component } from 'react';

class Contact extends Component {
    render(){
        return(
            <div id="contact-container">
                <form id="contact-form">
                    <input id="name-field" className="text-field" type="text" name="firstname" placeholder="Name"></input>
                    <br/>                  
                    <br/>
                    <input className="text-field" type="email" name="email" placeholder="Email"></input>
                    <br/>                  
                    <br/>
                    <textarea id="message-area" className="text-field" type="message" name="message" placeholder="Message"></textarea>
                    <br/>                  
                    <br/>
                    <button id="submit-button">Submit</button>
                    
                </form>
                
                
                
            
            </div>
        );
    }
}
export default Contact;