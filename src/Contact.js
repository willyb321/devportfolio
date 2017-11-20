import React, {Component} from 'react';
import './main.css';
import * as r2 from 'r2';

class Contact extends Component {
	constructor() {
		super();

		this.state = {
			submitting: 'spinner hidden'
		};
	}
	async submitForm(e) {
		e.preventDefault();
		e.persist();
		const data = {message: e.target[2].value, _replyto: e.target[1].value};
		if (!data._replyto || !data.message) {
			return;
		}
		e.target[3].disabled = true;
		await r2.post('https://formspree.io/wbwilliam7@gmail.com', {json: data, Accept: 'application/json'}).text;
		return Promise.resolve();
	}
	render() {
		return (
			<div id="contact"><h2>Get in Touch</h2>
				<div id="contact-form">
					<form onSubmit={e => {
						this.setState({submitting: 'spinner'});
						this.submitForm(e)
						.then(() => {
							this.setState({submitting: 'spinner hidden'});
						});
					}}>
						<input name="_subject" type="hidden"
							   value="Contact request from personal website"></input><input
						name="_replyto" placeholder="Your email" required="" type="email"></input>
						<textarea name="message"
								  placeholder="Your message"
								  required=""></textarea>
						<button type="submit">Send</button>
					</form>
					<div className={this.state.submitting}>
						<div className="rect1"></div>
						<div className="rect2"></div>
						<div className="rect3"></div>
						<div className="rect4"></div>
						<div className="rect5"></div>
					</div>
				</div>
			</div>
		);
	}
}

export default Contact;
