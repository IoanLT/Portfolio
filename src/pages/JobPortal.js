import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import portalDevices from "../assets/job-portal-devices.png";
// Animations
import { motion } from "framer-motion";
import {
	pageAnimation,
	textFade,
	photoAnimation,
	lineAnimation,
	contentAnimation,
	wrapAnimation,
} from "../animation";
// Import components
import {
	MusicMain,
	Banner,
	Devices,
	Concept,
	Development,
	Back,
} from "../pages/MusicPlayer";
import arrowRight from "../assets/Arrow-right-black.svg";
import backArrow from "../assets/backArrow.svg";
import line from "../assets/Line 54.svg";

const JobPortal = () => {
	return (
		<JobMain
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<Banner>
				<motion.h2 variants={textFade}>Job Portal</motion.h2>
				<motion.div variants={lineAnimation} className="line"></motion.div>
				<Devices>
					<motion.img
						variants={photoAnimation}
						src={portalDevices}
						alt="mobile and desktop"
					/>
				</Devices>
			</Banner>

			<Concept variants={wrapAnimation}>
				<motion.div className="concept-heading" variants={contentAnimation}>
					<img src={line} alt="line" />
					<h3>Concept</h3>
				</motion.div>
				<motion.div className="concept-text" variants={contentAnimation}>
					<motion.p>
						This was a group project created while studying web development at
						Wild Code School.
					</motion.p>
					<motion.p>
						Our goal was to create a fully functional job portal application
						that would allow anyone to find a new role in the tech industry,
						either remotely or in a specific location.
					</motion.p>
					<motion.p>
						This platform was the perfect project for us, we wanted to build
						something that would potentially help us or our colleagues find a
						role after completing the bootcamp which meant we had lots of users
						to test on.
					</motion.p>
				</motion.div>
				<motion.button variants={textFade}>
					<a
						href="https://happy-bardeen-f72460.netlify.app/"
						target="_blank"
						rel="noreferrer"
					>
						Visit Site
						<img src={arrowRight} alt="arrow-right" />
					</a>
				</motion.button>
			</Concept>

			<Development variants={wrapAnimation}>
				<motion.div className="development-heading" variants={contentAnimation}>
					<img src={line} alt="line" />
					<h3>Development</h3>
				</motion.div>
				<motion.div className="development-text" variants={contentAnimation}>
					<motion.p>
						The project has been built with React, using functional and class
						components, API calls and npm packages.
					</motion.p>
					<motion.p>The main features of this project are:</motion.p>

					<List>
						<ListItem>
							Search feature with several filters such as job type, job
							category, location and keywords.
						</ListItem>
						<ListItem>
							Jobs data fetched via the Remotive API, styled and displayed in a
							responsive job list.
						</ListItem>
						<ListItem>
							Sign in functionality: after the user is signed in, they have
							access to some extra features, a personal dashboard, a calendar
							that keeps track of the jobs the user has saved or applied to and
							a cover letter builder that can be personalised dynamically
							according to user input.
						</ListItem>
						<ListItem>A map with the candidate's required location.</ListItem>
					</List>
				</motion.div>
				<motion.button variants={textFade}>
					<a
						href="https://github.com/IoanLT/Job-portal"
						target="_blank"
						rel="noreferrer"
					>
						See on Github
						<img src={arrowRight} alt="arrow-right" />
					</a>
				</motion.button>
			</Development>

			<Link to="/#projects">
				<Back>
					<img src={backArrow} alt="arrow back" />
					<h4>BACK</h4>
				</Back>
			</Link>
		</JobMain>
	);
};

const JobMain = styled(MusicMain)`
	a {
		width: 250px;
		align-self: center;
	}
`;

export const List = styled(motion.ul)``;

export const ListItem = styled(motion.li)`
	line-height: 2;
	list-style: inside;
	margin-left: 1px;

	@media (max-width: 500px) {
		font-size: 14px;
	}

	::marker {
		color: hsl(360, 64%, 55%);
	}
`;

export default JobPortal;
