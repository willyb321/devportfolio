import React, {Component} from 'react';
import './main.css';

class Contact extends Component {
	render() {
		return (
			<div id="contact"><h2>Get in Touch</h2>
				<div id="contact-form">
					<form name="contact" method="POST" data-netlify="true">
						<input type="hidden" name="form-name" value="contact"/>
						<input
							name="name" placeholder="Your name" required="true" type="text"/>
						<input
							name="email" placeholder="Your email" required="true" type="email"/>
						<textarea name="message"
								  placeholder="Your message"
								  required=""/>
						<button type="submit">Send</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Contact;
