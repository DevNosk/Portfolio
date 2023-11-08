import React, { useState } from 'react';
import './Home.css';
import Fade from 'react-reveal/Fade';
import { Bounce } from 'react-reveal';
import { Link } from 'react-scroll';
import Typewriter from 'typewriter-effect';
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import Navbar from '../navbar/Navbar';
import profile from '../../images/Tom.jpg';
import linkedin from '../../images/social/linkedin.png';

const Home = () => {
	const [imageLoaded, setImageLoaded] = useState(false);
	return (
		<div className="home-wrapper">
			<div className="home">
				<div className={`greeting${!imageLoaded ? ' hide' : ''}`}>
					<Fade bottom distance="40px">
						<img
							className="profile"
							alt=""
							src={profile}
							onLoad={() => setImageLoaded(true)}
						/>
						<h1 className="greeting-text">
							Salut ! Je m'appelle <span className="name">Tom Tissot</span>.{' '}
							<span className="wave-emoji" role="img" aria-label="waving hand">
								👋
							</span>
						</h1>
						<h1 className="greeting-text">
							<Typewriter
								options={{
									strings: [
										"J'aime l'histoire",
										"Je m'intéresse aux nouvelles technologies",
										"Je suis passionnée d'informatique",
										'Je prends plaisir à jouer aux jeux de société',
									],
									autoStart: true,
									loop: true,
									deleteSpeed: 10,
									cursor: '<',
									delay: 100,
								}}
							/>
						</h1>
						<Bounce cascade>
							<div className="links">
								<a
									href="https://www.linkedin.com/in/tom-tissot-a323a929a/"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img src={linkedin} alt="Linkedin Logo" width="50px" />
								</a>
							</div>
						</Bounce>
						<div className="scroll-down">
							<Link
								activeClass="active"
								to="apropos"
								spy={true}
								smooth={true}
								offset={-63}
								duration={500}
							>
								<ArrowDropDownCircleIcon
									fontSize="large"
									style={{ pointerEvents: 'fill', cursor: 'pointer' }}
								/>
							</Link>
						</div>
					</Fade>
				</div>
				<Navbar />
			</div>
		</div>
	);
};

export default Home;
