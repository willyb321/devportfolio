import React, {Component} from 'react';
import './main.css';

class Skills extends Component {
	constructor() {
		super();
		this.state = {
			skills: [
				{name: 'JavaScript', url: 'https://www.javascript.com/'},
				{name: 'TypeScript', url: 'http://www.typescriptlang.org/'},
				{name: 'Node.JS', url: 'https://nodejs.org'},
				{name: 'Python', url: 'https://www.python.org/'},
				{name: 'Golang', url: 'https://golang.org/'},
				{name: 'C#', url: 'https://en.wikipedia.org/wiki/C_Sharp_%28programming_language%29'},
				{name: 'Electron', url: 'https://electron.atom.io'},
				{name: 'VueJS', url: 'https://vuejs.org/'},
				{name: 'React', url: 'https://reactjs.org/'},
				{name: 'Sass', url: 'http://sass-lang.com/'},
				{name: 'SCSS', url: 'http://sass-lang.com/'},
				{name: 'CSS', url: 'https://en.wikipedia.org/wiki/Cascading_Style_Sheets'},
				{name: 'MeteorJS', url: 'https://meteor.com'},
				{name: 'PouchDB', url: 'https://pouchdb.com/'},
				{name: 'MongoDB', url: 'https://www.mongodb.com/'},
				{name: 'Mongoose', url: 'http://mongoosejs.com/'},
				{name: 'NeDB', url: 'https://github.com/louischatriot/nedb/'}
			]
		};
	}

	render() {
		return (
			<div id="skills"><h2 className="heading">Skills</h2>
				<ul>
					{this.state.skills.map(station => <li key={station}><a href={station.url}
																		   target="_blank">{station.name}</a></li>)}
				</ul>
			</div>);
	}
}

export default Skills;
