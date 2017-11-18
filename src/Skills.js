import React, {Component} from 'react';
import './App.css';
import './main.css';

class Skills extends Component {
	constructor() {
		super();
		this.state = {
			skills: ['JavaScript', 'Python', 'Node.JS', 'Electron', 'VueJS', 'React', 'Sass', 'SCSS', 'CSS', 'MeteorJS', 'Golang', 'PouchDB', 'MongoDB']
		};
	}
	render() {
		return (
			<div id="skills"><h2 className="heading">Skills</h2>
				<ul>
					{this.state.skills.map(station => <li key={station}> {station} </li>)}
				</ul>
			</div>);
	}
}

export default Skills;
