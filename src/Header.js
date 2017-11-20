import React, {Component} from 'react';
import './main.css';
import Scroll from 'react-scroll';

export function handleClick(e) {
	Scroll.scroller.scrollTo(e.target.getAttribute('data-to'), {
		duration: 1500,
		delay: 0,
		smooth: true,
		spy: true,
		hashSpy: true
	});
}

class Header extends Component {
	constructor() {
		super();
		this.state = {
			mobileMenuClass: '',
			classes: 'shadow-large'
		};
	}

	openMobileMenu() {
		this.setState({mobileMenuClass: 'active'});
	}

	render() {
		return (
			<div>
				<div className={this.state.classes} onClick={() => {
					this.openMobileMenu();
				}} id="mobile-menu-open"><i className="fa fa-bars" aria-hidden="true"></i></div>
				<header className={this.state.mobileMenuClass}>
					<div onClick={() => {
						this.setState({mobileMenuClass: ''});
					}} id="mobile-menu-close">
						<span>Close</span>
						<i className="fa fa-times" aria-hidden="true"></i>
					</div>
					<ul className="shadow" id="menu">
						<li><a onClick={e => {
							handleClick(e);
							this.setState({mobileMenuClass: ''});
						}} data-to={'about'}>About</a></li>
						<li><a onClick={e => {
							handleClick(e);
							this.setState({mobileMenuClass: ''});
						}} data-to={'education'}>Education</a></li>
						<li><a onClick={e => {
							handleClick(e);
							this.setState({mobileMenuClass: ''});
						}} data-to={'projects'}>Projects</a></li>
						<li><a onClick={e => {
							handleClick(e);
							this.setState({mobileMenuClass: ''});
						}} data-to={'skills'}>Skills</a></li>
						<li><a onClick={e => {
							handleClick(e);
							this.setState({mobileMenuClass: ''});
						}} data-to={'contact'}>Contact</a></li>
					</ul>
				</header>
			</div>
		);
	}
}

export default Header;
