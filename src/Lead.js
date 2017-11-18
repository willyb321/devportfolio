import React, {Component} from 'react';
import './main.css';
import {scroll} from './Header';
import $ from 'jquery';

class Lead extends Component {
	render() {
		return (
			<div id="lead">
				<div id="lead-content"><h1>William Blythe</h1><h2>Software Developer</h2>
					<a className="btn-rounded-white" onClick={scroll} id="resume" href={"#contact"}>Get a resume</a></div>
				<div id="lead-overlay"></div>
				<div id="lead-down">
					<span>
					<i onClick={(e) => {
						const scrollDistance = $(e.target.parentNode.parentNode.parentNode).next().offset().top;
						$('html, body').animate({
							scrollTop: scrollDistance + 'px'
						}, 500);
					}} className="fa fa-chevron-down" aria-hidden="true"></i>
					</span>
				</div>
			</div>
		);
	}
}

export default Lead;

