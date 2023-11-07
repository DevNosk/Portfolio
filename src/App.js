import React from 'react';
import './App.css';
import Home from './components/home/Home';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';

function App() {
	return (
		<div className="App">
			<Home />
			<About />
			<Experience />
			<Contact />
		</div>
	);
}

export default App;
