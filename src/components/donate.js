import React, {Component} from 'react'

import payPalImage from '../assets/svg/paypal-icon.svg'

class Donate extends Component{
    render(){
        return(
            <div id="donate-button-container">
                <img id="paypal-image" src={payPalImage}/>
                {/* <button id="donate-button">Donate & Help!</button> */}
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
                    <input type="hidden" name="cmd" value="_donations" />
                    <input type="hidden" name="business" value="MKW3322LAFDYA" />
                    <input type="hidden" name="currency_code" value="USD" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                    <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div>
            
        );
    }

    
}

export default Donate