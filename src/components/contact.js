import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {
	constructor(props) {
		super(props);
		this.state = {
			charactersRemaining: 160,
			maxCharacters: 160,
			charatctersEntered: 0,
			email: "",
			message: ""
		};
		this.handleSubmit = this.handleSubmit.bind(this);
		this.updateMessage = this.updateMessage.bind(this);
		this.updateEmail = this.updateEmail.bind(this);
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
	
	handleSubmit = () => {

		const requestBody = {
			"email": this.state.email,
			"message": this.state.message
		}

		axios.post("/.netlify/functions/server/sendMail",requestBody)
		.then( response => {
			console.log(response)
			this.setState({
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
				<form id="contact-form">
					{/* <input id="name-field" className="text-field" type="text" name="firstname" placeholder="Name"></input> */}

					<input className="text-field" type="email" name="email" placeholder="Email" onChange={this.updateEmail} ></input>
					<textarea id="message-area" className="text-field" onKeyUp={this.updateMessage} maxLength="160" type="message" name="message" placeholder="Message..."></textarea>
					<span id="character-count">You have {this.state.charactersRemaining} characters remaming.</span>
					<button id="submit-button" onClick={this.handleSubmit }>Submit</button>

				</form>
			</div>
		);
	}
}
export default Contact;