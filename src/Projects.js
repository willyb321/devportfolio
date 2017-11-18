import React, {Component} from 'react';
import './main.css';
import mediamate from './images/mediamate.png';
import rss from './images/rss.png';
import elite from './images/elite.png';
import pebbleEdsm from './images/pebble-edsm.svg';
import timetable from './images/timetable.png';

class Projects extends Component {
	constructor() {
		super();
		this.state = {
			projects: [
				{
					img: mediamate,
					imgAlt: 'Media Mate',
					title: 'Media Mate',
					description: `A full featured media centre, written in
								Electron and Node.JS`,
					url: 'https://github.com/willyb321/media_mate'
				},
				{
					img: elite,
					imgAlt: 'Elite Journal',
					title: 'Elite Journal',
					description: `A journal parser and viewer, for Elite Dangerous`,
					url: 'https://github.com/willyb321/elite-journal'
				},
				{
					img: rss,
					imgAlt: 'PugRSS',
					title: 'PugRSS',
					description: `Self hosted RSS reader made with ExpressJS and Pug`,
					url: 'https://github.com/willyb321/PugRSS'
				},
				{
					img: pebbleEdsm,
					imgAlt: 'Pebble EDSM',
					title: 'Pebble EDSM',
					description: `A pebble app that allows you to get various info from EDSM`,
					url: 'https://github.com/willyb321/pebble-edsm'
				},
				{
					img: timetable,
					imgAlt: 'Electron Menubar Timetable',
					title: 'Electron Menubar Timetable',
					description: `An electron app that allows you to have your timetable in your menubar.`,
					url: 'https://github.com/willyb321/electron-menubar-timetable'
				},
				{
					img: null,
					imgAlt: null,
					title: 'Wifi Transfer',
					description: `Transfer files over the network using Zeroconf and Bonjour.`,
					url: 'https://github.com/willyb321/wifi-transfer'
				},
				{
					img: null,
					imgAlt: null,
					title: 'FileUpServe',
					description: `Image host made for use with ShareX.`,
					url: 'https://github.com/willyb321/fileupserve'
				},
				{
					img: null,
					imgAlt: null,
					title: 'tsEDDN',
					description: `A Typescript listener for the Elite Dangerous Data Network`,
					url: 'https://github.com/willyb321/tsEDDN'
				},
				{
					img: null,
					imgAlt: null,
					title: 'My Dotfiles',
					description: `My configurations in the form of a git repository.`,
					url: 'https://github.com/willyb321/.dotfiles'
				},
				{
					img: null,
					imgAlt: null,
					title: 'Elite: Dangerous LogWatcher',
					description: `A ready-to-use module to parse the Elite: Dangerous log files.`,
					url: 'https://github.com/willyb321/ed-logwatcher'
				}
			]
		};
	}

	static image(i) {
		if (i.img) {
			return <div className="project-image"><img alt={i.imgAlt}
													   src={i.img}/></div>;
		} else {
			return '';
		}
	}

	render() {
		return (
			<div className="background-alt" id="projects">
				<h2 className="heading">Projects</h2>
				<div className="container">
					<div className="row">
						{
							this.state.projects.map(station =>
								<div key={station.title} className={`project shadow-large ${!station.img ? 'no-image' : ''}`}>
									{Projects.image(station)}
									<div className="project-info"><h3>{station.title}</h3><p>{station.description}</p><a
										href={station.url}>View
										Project</a></div>
								</div>
							)
						}
					</div>
				</div>
			</div>
		);
	}
}

export default Projects;
