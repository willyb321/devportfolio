import React, {Component} from 'react';
import './main.css';

class Contact extends Component {
	render() {
		return (
			<div id="contact"><h2>Get in Touch</h2>
				<div id="contact-form">
					<form name="Contact" method="POST" data-netlify="true">
						<input name="_subject" type="hidden"
							   value="Contact request from personal website"/>
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
