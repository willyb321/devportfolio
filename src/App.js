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
import MobileMenu from './MobileMenu';

class App extends Component {
	render() {
		return (
			<div className="App">
				<MobileMenu/>
				<Header/>
				<Lead/>
				<About/>
				<Education/>
				<Projects/>
				<Skills/>
				<Contact/>
				<Footer/>
			</div>
		);
	}
}

export default App;
