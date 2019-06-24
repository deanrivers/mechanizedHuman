import React, { Component } from 'react';

class Contact extends Component {
    render(){
        return(
            <div id="contact-container">
                <form id="name">
                    <input type="text" name="firstname" placeholder="First"></input>
                    <input type="text" name="lastname" placeholder="Last"></input>
                    <br/>                  
                    <br/>
                    <input type="email" name="email" placeholder="Email"></input>
                    <br/>                  
                    <br/>
                    <input type="message" name="message" placeholder="Message"></input>
                    <br/>                  
                    <br/>
                    <input type="submit"/>
                </form>
                
            
            </div>
        );
    }
}
export default Contact;