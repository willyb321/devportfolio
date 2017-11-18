import React, {Component} from 'react';
import './main.css';
import $ from 'jquery';

export function scroll(e) {
	// Treat as normal link if no-scroll class
	if ($(this).hasClass('no-scroll')) return;

	e.preventDefault();
	const heading = $(e.target).attr('href');
	const scrollDistance = $(heading).offset().top;

	$('html, body').animate({
		scrollTop: scrollDistance + 'px'
	}, Math.abs(window.pageYOffset - $(heading).offset().top) / 3);

	// Hide the menu once clicked if mobile
	if ($('header').hasClass('active')) {
		$('header, body').removeClass('active');
	}
}

class Header extends Component {
	render() {
		return (
			<header>
				<div onClick={() => {$('header, body').removeClass('active')}} id="mobile-menu-close">
					<span>Close</span>
					<i className="fa fa-times" aria-hidden="true"></i>
				</div>
				<ul className="shadow" id="menu">
					<li><a onClick={scroll} href={'#about'}>About</a></li>
					<li><a onClick={scroll} href={'#education'}>Education</a></li>
					<li><a onClick={scroll} href={'#projects'}>Projects</a></li>
					<li><a onClick={scroll} href={'#skills'}>Skills</a></li>
					<li><a onClick={scroll} href={'#contact'}>Contact</a></li>
				</ul>
			</header>
		);
	}
}

export default Header;
