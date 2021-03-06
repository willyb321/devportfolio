import React, {Component} from 'react';
import './main.css';
import {clickScroll} from './Header';

class Lead extends Component {
	render() {
		return (
			<div id="lead">
				<div id="lead-content"><h1>William Blythe</h1><h2>Software Developer</h2>
					<a className="btn-rounded-white" onClick={clickScroll} id="resume" data-to={'contact'}>Get a resume</a></div>
				<div id="lead-overlay"></div>
				<div id="lead-down">
					<span>
					<i onClick={clickScroll} data-to={'about'} className="fa fa-chevron-down" aria-hidden="true"></i>
					</span>
				</div>
			</div>
		);
	}
}

export default Lead;

