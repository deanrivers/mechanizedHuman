import React, {Component} from 'react'
import $ from 'jquery'

import payPalImage from '../assets/svg/paypal-icon.svg'

class Donate extends Component{

    constructor(props){
        super(props);
        this.paypalClicked = this.paypalClicked.bind(this)
    }

    paypalClicked(e){
        //click 
        e.preventDefault()
        let paypal = document.getElementById('paypal-button')
        paypal.click()
    }

    render(){
        return(
            <div id="donate-button-container">
                <img id="paypal-image" src={payPalImage}/>
                {/* <button id="donate-button">Donate & Help!</button> */}
                <form id="paypal-form" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                    <input type="hidden" name="cmd" value="_donations" />
                    <input type="hidden" name="business" value="MKW3322LAFDYA" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="image" id="paypal-input" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
                <button id="paypal-button" onClick={this.paypalClicked}>something</button>
            </div>
            
        );
    }

    
}

export default Donate