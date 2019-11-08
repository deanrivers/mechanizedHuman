import React, {Component} from 'react'

import payPalImage from '../assets/svg/paypal-icon.svg'

class Donate extends Component{
    render(){
        return(
            <div id="donate-button-container">
                <img id="paypal-image" src={payPalImage}/>
                <button id="donate-button">Donate & Help!</button>
            </div>
            
        );
    }

    
}

export default Donate