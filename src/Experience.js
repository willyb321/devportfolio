import React, {Component} from 'react';
import './main.css';

class Experience extends Component {
	constructor() {
		super();
		this.state = {
			jobs: [
				{
					date: "September 2018 – February 2019",
					employer: "Intygrate",
					title: "Junior Front-End Web Developer",
					description:
						"Worked with Intygrate's DevTeam. Lots of fun and hard work."
				}
				// {date: '??? – ???', employer: 'Your Company?', title: 'Software Developer', description: 'I\'m currently seeking employment. Contact me using the form below.'},
			]
		};
	}

	static timeline(date) {
		return (
			<div>
				<span className="vtimeline-date">{date}</span>
			</div>
		);
	}

	static timelineContent(station) {
		return (<div className="vtimeline-content">
			{Experience.timeline(station.date)}
			<h3>{station.employer}</h3>
			<h4>{station.title}</h4>
			<p>{station.description}</p>
		</div>);
	}

	timelineRoot(station) {
		return (
			<div key={station.title}>
				<div className="vtimeline-icon"><i className="fa fa-map-marker"></i></div>
				<div className="vtimeline-point">
					<div className="vtimeline-block">
						{Experience.timelineContent(station)}
					</div>
				</div>
			</div>
		);
	}

	render() {
		return (
			<div id="experience" className="background-alt">
				<h2 className="heading">Experience</h2>
				<div id="experience-timeline">
					{this.state.jobs.map(station => this.timelineRoot(station))}
				</div>
			</div>
		);
	}
}

export default Experience;
