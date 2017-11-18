import React, {Component} from 'react';
import './main.css';
import $ from 'jquery';

class MobileMenu extends Component {
	constructor() {
		super();
		this.state = {
			classes: 'shadow-large'
		};
	}
	render() {
		return (
			<div className={this.state.classes} onClick={() => {
				$('header, body').addClass('active');
			}} id="mobile-menu-open"><i className="fa fa-bars" aria-hidden="true"></i></div>
		);
	}
}
export default MobileMenu;
