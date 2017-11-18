import React, {Component} from 'react';
import './main.css';
import $ from 'jquery';

function createTimeLime() {
	$('#experience-timeline').each(function () {
		const $this = $(this); // Store reference to this
		const $userContent = $this.children('div'); // user content
		// Create each timeline block
		$userContent.each(function () {
			$(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
		});

		// Add icons to each block
		$this.find('.vtimeline-point').each(function () {
			$(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
		});

		// Add dates to the timeline if exists
		$this.find('.vtimeline-content').each(function () {
			const date = $(this).data('date');
			if (date) { // Prepend if exists
				$(this).parent().prepend('<span class="vtimeline-date">' + date + '</span>');
			}
		});

	});
}

class Experience extends Component {
	constructor() {
		super();
		this.state = {
			jobs: [
				{date: 'September 2014 – September 2015', employer: 'TBD1', title: 'TBD1', description: 'Some words'},
				{date: 'September 2015 – September 2016', employer: 'TBD2', title: 'TBD2', description: 'Some words'},
				{date: 'September 2016 – September 2017', employer: 'TBD3', title: 'TBD3', description: 'Some words'}
			]
		};
	}

	render() {
		return (
			<div id="experience" className="background-alt">
				<h2 className="heading">Experience</h2>
				<div id="experience-timeline">
					{this.state.jobs.map(station => <div key={station.title} data-date={station.date}>
						<h3>{station.employer}</h3>
						<h4>{station.title}</h4>
						<p>{station.description}</p>
					</div>)}
				</div>
			</div>
		);
	}
}

window.onload = () => {
	createTimeLime();
};
export default Experience;
