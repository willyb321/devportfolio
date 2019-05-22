import React, { Component } from "react";
import "./main.css";

class Skills extends Component {
	constructor() {
		super();
		this.state = {
			skills: [
				{
					name: "JavaScript",
					url: "https://www.javascript.com/"
				},
				{
					name: "TypeScript",
					url: "http://www.typescriptlang.org/"
				},
				{
					name: "HTML",
					url: "https://en.wikipedia.org/wiki/HTML"
				},
				{ name: "Pug", url: "https://pugjs.org" },
				{ name: "Node.JS", url: "https://nodejs.org" },
				{ name: "MeteorJS", url: "https://meteor.com" },
				{ name: "Electron", url: "https://electron.atom.io" },
				{ name: "VueJS", url: "https://vuejs.org/" },
				{ name: "React", url: "https://reactjs.org/" },
				{ name: "AngularJS", url: "https://angular.io/" },
				{ name: "Sass / SCSS", url: "http://sass-lang.com/" },
				{
					name: "CSS",
					url: "https://en.wikipedia.org/wiki/Cascading_Style_Sheets"
				},
				{ name: "Mongoose", url: "http://mongoosejs.com/" },
				{ name: "Python", url: "https://www.python.org/" },
				{
					name: "Bash",
					url: "https://en.wikipedia.org/wiki/Bash_(Unix_shell)"
				},
				{
					name: "ZSH",
					url: "https://en.wikipedia.org/wiki/Z_shell"
				},
				{ name: "MongoDB", url: "https://www.mongodb.com/" }
			]
		};
	}

	render() {
		return (
			<div id="skills">
				<h2 className="heading">Skills</h2>
				<ul>
					{this.state.skills.map(skill => (
						<li key={skill.name}>
							<a href={skill.url} target="_blank" rel="noopener">
								{skill.name}
							</a>
						</li>
					))}
				</ul>
			</div>
		);
	}
}

export default Skills;
