import React, {Component} from 'react';
import './App.css';
import './main.css';

class Contact extends Component {
	render() {
		return (
			<div id="contact"><h2>Get in Touch</h2>
				<div id="contact-form">
					<form action="https://formspree.io/wbwilliam7@gmail.com" method="POST">
						<input name="_subject" type="hidden"
							   value="Contact request from personal website"></input><input
						name="_replyto" placeholder="Your email" required="" type="email"></input>
						<textarea name="message"
								  placeholder="Your message"
								  required=""></textarea>
						<button type="submit">Send</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Contact;
