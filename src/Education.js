import React, {Component} from 'react';
import './main.css';

class Education extends Component {
	constructor() {
		super();
		this.state = {
			education: [
				{
					date: 'January 2012 - November 2017',
					name: 'High School', subtitle: 'Technology', description: `Some of my accomplishments
					in High School include getting the Technology Award (After it not being awarded to anyone for 4
					years), Doing open night 3 years in a row, being an integral part of the Technology Centre Grand
					Opening, and developing the Noticeboard being used to this day.`
				},
				{
					name: 'TAFE',
					date: 'February 2018 - June 2018',
					subtitle: 'IDT Cert 3',
					description: `Cert 3 in Information and Digital Technology at TAFE.`
				},
				{
					name: 'TAFE',
					date: 'July 2018 - Current (On hold)',
					subtitle: 'Programming Cert 4',
					description: `Cert 4 in Programming at TAFE. Java and C#.`
				}
			]
		};
	}

	render() {
		return (
			<div id="education"><h2 className="heading">Education</h2>
				{
					this.state.education.map(station =>
						<div className="education-block" key={station.name}>
							<h3>{station.name}</h3><span className="education-date">{station.date}</span>
							<h4>{station.subtitle}</h4>
							<p>{station.description}</p>
						</div>
					)
				}
			</div>
		);
	}
}

export default Education;
