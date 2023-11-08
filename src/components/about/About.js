import React from 'react';
import './About.css';
import Typewriter from 'typewriter-effect';
import { Link } from 'react-scroll';
import { Fade } from 'react-reveal';
import Section from '../section/Section';
import Skills from '../skills/Skills';

const About = () => {
	return (
		<Section title="A propos">
			<div className="about-content">
				<Fade duration={1000}>
					<div className="about-text">
						<h2>Qui suis-je?</h2>
						<p>
							Je suis Tom{' '}
							<span role="img" aria-label="lightning">
								😄
							</span>{' '}
						</p>
						<p>
							<span role="img" aria-label="lightning">
								⚡
							</span>{' '}
							Je suis un développeur Front-end.
						</p>
						<p>
							<span role="img" aria-label="lightning">
								⚡
							</span>{' '}
							Je travaille avec React , JavaScript , HTML et CSS
						</p>
						<div className="typewriter">
							<p className="typewriter-start">
								<span role="img" aria-label="lightning">
									⚡
								</span>{' '}
								J'aime
							</p>
							<Typewriter
								options={{
									strings: [
										'le football Américain',
										'résoudre des problèmes compliqués',
										'les jeux vidéo',
										'la gastronomie',
										'essayer de nouvelles choses',
										'travailler en équipes',
									],
									autoStart: true,
									loop: true,
								}}
							/>
							<p>.</p>
						</div>
						<p>
							{' '}
							<Link
								className="textLink"
								to="projects"
								spy={true}
								smooth={true}
								duration={500}
							></Link>{' '}
							<Link
								className="textLink"
								to="experience"
								spy={true}
								smooth={true}
								duration={500}
							></Link>
						</p>
						<div className="location-wrapper">
							<svg
								className="octicon octicon-location"
								viewBox="0 0 16 16"
								version="1.1"
								width="16"
								height="16"
								aria-hidden="true"
							>
								<path
									fill="white"
									fillRule="evenodd"
									d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z"
								></path>
							</svg>
							<p>Lyon, France</p>
						</div>
					</div>
				</Fade>
				<Skills />
			</div>
		</Section>
	);
};

export default About;
