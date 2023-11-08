import React, { useState } from 'react';
import './ExperienceCard.css';
import GitHub from '../../images/social/github.png';
import Page from '../../images/social/internet.png';
const ExperienceCard = ({ experience, backcontent }) => {
	const [isFlipped, setFlipped] = useState(false);

	const toggleFlip = () => {
		setFlipped(!isFlipped);
	};

	const { company, title, dateFrom, dateTo, info, stack } = experience;

	return (
		<div
			className={`experience-card ${isFlipped ? 'flip' : ''}`}
			onClick={toggleFlip}
		>
			<div className="experience-card-inner">
				<div className="experience-card-front">
					<div className="experience-card-wrapper">
						<div className="experience-card-top">
							<div
								className="experience-bg"
								style={{ background: experience.colourPrimary }}
							></div>
							<h2>{company}</h2>
							<div className="image-wrapper">
								<div
									className="experience-bg logo-bg"
									style={{
										background: experience.colourSecondary
											? experience.colourSecondary
											: experience.colourPrimary,
									}}
								></div>
								<img
									className="company-logo"
									src={require(`../../images/logos/${company
										.replace(/ /g, '')
										.toLowerCase()}.png`)}
									alt={`${company}-logo`}
									style={
										experience.logoheight
											? {
													height: `${experience.logoheight}%`,
											  }
											: { width: `${experience.logowidth}%` }
									}
								/>
							</div>
						</div>
						<div className="experience-card-bottom">
							<div>
								<h2>{title}</h2>
								<h3>
									{dateFrom} - {dateTo}
								</h3>
								<ul>
									{info.map((point, idx) => (
										<li key={`${company}-point-${idx}`}>{point}</li>
									))}
								</ul>
							</div>
							<div className="experience-card-tech">
								<ul>
									{stack.map(tech => (
										<li key={`${company}-${tech}`}>{tech}</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="experience-card-back">
					{isFlipped && experience.backcontent && (
						<div>
							<h2
								className={`companyback ${
									experience.company === 'NomDeLaCompany'
										? 'custom-class-name'
										: ''
								}`}
							>
								{experience.backcontent.company}
							</h2>

							<h2 className="titleback">{experience.backcontent.title}</h2>
							<h3>
								{experience.backcontent.dateFrom}{' '}
								{experience.backcontent.dateTo}
							</h3>
							<ul>
								{experience.backcontent.info.map((point, idx) => (
									<li key={`${company}-back-point-${idx}`}>{point}</li>
								))}
							</ul>

							{/* Ajoutez ici les liens en bas de la balise UL */}
							<div className="link-container">
								<a
									href={experience.backcontent.link1}
									className="custom-link"
									onClick={e => e.stopPropagation()}
								>
									<img className="git" src={GitHub} alt="GitHub" />
								</a>
								<a
									href={experience.backcontent.link2}
									className="custom-link"
									onClick={e => e.stopPropagation()}
								>
									<img className="internet" src={Page} alt="Page" />
								</a>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default ExperienceCard;
