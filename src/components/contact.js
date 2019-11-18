import React, { Component } from 'react';
import axios from 'axios';

//image
import contactImage from '../assets/contact.png'

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			charactersRemaining: 160,
			maxCharacters: 160,
			charatctersEntered: 0,
			name: "",
			email: "",
			message: "",
			errorMessage: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this)
		this.updateName = this.updateName.bind(this)
		this.updateMessage = this.updateMessage.bind(this)
		this.updateEmail = this.updateEmail.bind(this)
		this.checkInfo = this.checkInfo.bind(this)
		
	}

	checkInfo(e){
		e.preventDefault()
		var email = this.refs.email.value
		var name = this.refs.name.value
		var message = this.refs.message.value
		var valid = false

		//email regex
		var emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		//name regex
		var nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g

		if(emailRegex.test(email) && nameRegex.test(name) && message != '' ){
			valid = true
		} else{
			this.setState({errorMessage: 'Please make sure the info you provided is valid...'})
		}

		//if something is invalid, provide an error

		//if everything is valid do, trigger handle submit
		if(valid){
			console.log('everything is valid')
			this.handleSubmit();
			this.setState({errorMessage: 'Thank You for contacting us!'})
		} 
	}

  	updateEmail(event) {
    this.setState({
			email: event.target.value
		});
	}

	updateMessage(event) {
		let textLength = event.target.value.length;

		this.setState({
			message: event.target.value,
			charactersRemaining: this.state.maxCharacters - textLength 
		});
	}

	updateName(event) {
		this.setState({
			name: event.target.value
		});
	}
	
	handleSubmit = () => {

		const requestBody = {
			"name": this.state.name,
			"email": this.state.email,
			"message": this.state.message
		}

		axios.post("/.netlify/functions/server/sendMail",requestBody)
		.then( () => {
			this.setState({
				name: "",
				email: "",
				message: "",
			})
		})
		.catch( error => {
			console.log(error)
		})
	}

	render() {
		return (
			<div id="contact-container">
				{/* <img src={contactImage} id="contact-image"/> */}
				{this.props.image}
				<form id="contact-form">
					<p id="error-message">{this.state.errorMessage}</p>
					<input className="text-field" type="name" name="name" ref="name" placeholder="Name" onKeyUp={this.updateName}></input>
					<input className="text-field" type="email" name="email" ref="email" placeholder="Email" onKeyUp={this.updateEmail} ></input>
					<textarea id="message-area" className="text-field" onKeyUp={this.updateMessage} ref="message" maxLength="160" type="message" name="message" placeholder="Message..."></textarea>
					<span id="character-count">You have {this.state.charactersRemaining} characters remaming.</span>
					<button id="submit-button" onClick={this.checkInfo}>Submit</button>
				</form>
			</div>
		);
	}
}
export default Contact;