import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import instabeautyDevices from "../assets/instabeauty-devices.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
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
import { List, ListItem } from "../pages/JobPortal";
import backArrow from "../assets/backArrow.svg";
import line from "../assets/Line 54.svg";

const Instabeauty = () => {
	return (
		<MainWrapper
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<Banner>
				<motion.h2 variants={textFade}>Instabeauty</motion.h2>
				<motion.div variants={lineAnimation} className="line"></motion.div>
				<Devices>
					<motion.img
						variants={photoAnimation}
						src={instabeautyDevices}
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
						Instabeauty by Janine is a business that offers various cosmetic
						treatments, located in central Bucharest.
					</motion.p>
					<motion.p>
						The aim was to create a website that will inform potential clients
						of the services offered in the studio and how to book a treatment.
					</motion.p>
					<motion.p>
						The main objective is to give Janine’s customers all the information
						they need to feel confident to pick up the phone and make a booking.
					</motion.p>
				</motion.div>
				<InProgress variants={textFade}>
					<p>In progress</p>
					<FontAwesomeIcon icon={faTimesCircle} size="2x" />
				</InProgress>
			</Concept>

			<Development variants={wrapAnimation}>
				<motion.div className="development-heading" variants={contentAnimation}>
					<img src={line} alt="line" />
					<h3>Development</h3>
				</motion.div>
				<motion.div className="development-text" variants={contentAnimation}>
					<motion.p>
						The project involved creating a brand new 4 page website for
						Instabeauty by Janine, using React hooks, styled components and
						framer-motion containing the following pages:
					</motion.p>

					<List>
						<ListItem>
							Landing page/about me: this will cover Janine’s experience and
							qualifications and well as customer testimonials to build trust in
							the service that she offers.
						</ListItem>
						<ListItem>
							Services offered: this will contain information on the 6 different
							services that she offers alongside a gallery of before and after
							images so that customers can visualise how it will look on them.
						</ListItem>
						<ListItem>
							Prices: this will contain a full list of prices for the services
							as well as touch ups, easy to locate, compare and update in the
							future.
						</ListItem>
						<ListItem>
							FAQ: To save Janine time we’ll list the top ten questions that she
							answers on a regular basis.
						</ListItem>
					</List>
				</motion.div>
				<InProgress variants={textFade}>
					<p>In progress</p>
					<FontAwesomeIcon icon={faTimesCircle} size="2x" />
				</InProgress>
			</Development>

			<Link to="/#projects">
				<Back>
					<img src={backArrow} alt="arrow back" />
					<h4>BACK</h4>
				</Back>
			</Link>
		</MainWrapper>
	);
};

const MainWrapper = styled(MusicMain)`
	a {
		width: 250px;
		align-self: center;
	}
`;

const InProgress = styled(motion.button)`
	display: flex;
	width: 250px;
	color: #09070b;
	align-items: center;
	justify-content: center;

	@media (max-width: 500px) {
		margin-top: 50px;
	}

	&:hover {
		background: hsl(360, 71%, 66%);
	}

	p {
		margin: 0;
		padding-right: 20px;
	}
`;

export default Instabeauty;
