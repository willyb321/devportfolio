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
								Hi, I'm William, and I develop software.
								I have currently just finished a Cert III in Information and Digital Technology at Loftus TAFE. My last year of High School (Year 12), studying Software Design and Development, Information Digital Technology, Business Studies, plus the normal subjects (English, Maths).
								I will be studying a part time Programming Cert IV.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;

