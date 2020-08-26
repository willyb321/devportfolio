import React, {Component} from 'react';
import './main.css';

class About extends Component {
	render() {
		return (
			<div id="about">
				<div className="container">
					<div className="row">
						<div className="col-md-4">
							<h2 className="heading">About Me</h2>
						</div>
						<div className="col-md-8">
							<p>
								Hi, I'm William, and I develop software.
								I'm currently looking for part time work. I finished a Cert III in
								Information and Digital Technology at
								Loftus TAFE in 2018. 2017 was my last
								year of High School (Year 12), studying
								Software Design and Development,
								Information Digital Technology, Business
								Studies, plus the normal subjects
								(English, Maths). I am currently seeking part-time work.
							</p>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default About;
