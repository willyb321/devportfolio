import React, {Component} from 'react';
import './main.css';

import Header from './Header';
import Lead from './Lead';
import About from './About';
import Education from './Education';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from './Footer';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header/>
				<Lead/>
				<About name="about"/>
				<Education name="education"/>
				<Projects name="projects"/>
				<Skills name="skills"/>
				<Contact name="contact"/>
				<Footer/>
			</div>
		);
	}
}

export default App;
