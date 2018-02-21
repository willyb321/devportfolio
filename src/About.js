import React, {Component} from 'react';
import './main.css';

class About extends Component {
	render() {
		return (
			<div id="about">
				<div className="container">
					<div className="row">
						<div className="col-md-4"><h2 className="heading">About Me</h2></div>
						<div className="col-md-8">
							<p>
								Hi, I'm William, and I develop software. I am currently studying a certification in Information and Digital Technology at TAFE. After I finish, I will be moving to a programming certification.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;

