import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
// import animations
import {
	aboutAnimation,
	titleAnimation,
	menuAnimation,
	skills,
	skillsAnimation,
} from "../animation";
import line from "../assets/Line 54.svg";
import scrolldown from "../assets/scrolldown.png";
// import custom scroll hook
import { useScroll } from "./useScroll";

const About = () => {
	const [element, controls] = useScroll();

	return (
		<AboutSection id="about" ref={element}>
			<div className="content-wrap">
				<AboutWrapper>
					<AboutDescription
						ref={element}
						variants={menuAnimation}
						animate={controls}
						initial="hidden"
					>
						<AboutHeader variants={titleAnimation}>
							<h2>About me</h2>
						</AboutHeader>
						<motion.p variants={titleAnimation}>
							I’m a London based web developer who loves communicating ideas
							through code and create beautiful layouts for an enjoyable user
							experience.
						</motion.p>
						<motion.p variants={titleAnimation}>
							I'm passionate about UX/UI design, creating user interactions and
							creative animations.
						</motion.p>
						<motion.p variants={titleAnimation}>
							In my spare time I enjoy reading and learning about the latest
							trends in web development and design, as well as traveling with my
							girlfriend and dog in our campervan.
						</motion.p>
					</AboutDescription>

					<Skills
						ref={element}
						variants={menuAnimation}
						animate={controls}
						initial="hidden"
					>
						<AboutHeader variants={titleAnimation}>
							<h2>Skills</h2>
						</AboutHeader>
						<SkillSet>
							<motion.div
								ref={element}
								variants={aboutAnimation}
								animate={controls}
								initial="hidden"
							>
								<motion.li variants={skillsAnimation}>
									<img src={line} alt="line" />
									<p>HTML/CSS</p>
								</motion.li>
								<motion.li variants={skillsAnimation}>
									<img src={line} alt="line" />
									<p>JavaScript</p>
								</motion.li>
								<motion.li variants={skillsAnimation}>
									<img src={line} alt="line" />
									<p>React</p>
								</motion.li>
								<motion.li variants={skillsAnimation}>
									<img src={line} alt="line" />
									<p>Animations</p>
								</motion.li>
								<motion.li variants={skillsAnimation}>
									<img src={line} alt="line" />
									<p>Express</p>
								</motion.li>
							</motion.div>

							<motion.div
								ref={element}
								variants={skills}
								animate={controls}
								initial="hidden"
							>
								<motion.li variants={skillsAnimation}>
									<img src={line} alt="line" />
									<p>Wireframing</p>
								</motion.li>
								<motion.li variants={skillsAnimation}>
									<img src={line} alt="line" />
									<p>User experience</p>
								</motion.li>
								<motion.li variants={skillsAnimation}>
									<img src={line} alt="line" />
									<p>UI Design</p>
								</motion.li>
								<motion.li variants={skillsAnimation}>
									<img src={line} alt="line" />
									<p>Responsive Design</p>
								</motion.li>
								<motion.li variants={skillsAnimation}>
									<img src={line} alt="line" />
									<p>MongoDB</p>
								</motion.li>
							</motion.div>
						</SkillSet>
					</Skills>
				</AboutWrapper>
				<ScrollDown>
					<img src={scrolldown} alt="down arrow" />
					<p>Scrolldown</p>
				</ScrollDown>
			</div>
		</AboutSection>
	);
};

const AboutSection = styled(motion.section)`
	min-height: 100vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 0 5%;
	color: #fff;
	position: relative;

	@media (max-width: 1024px) {
		height: 100%;
		margin-bottom: 100px;
	}
`;

const AboutWrapper = styled(motion.div)`
	display: flex;
	align-items: flex-start;
	justify-content: space-between;

	@media (max-width: 1024px) {
		flex-direction: column;
		align-items: center;
	}
`;

const AboutDescription = styled(motion.div)`
	display: flex;
	flex-direction: column;
	width: 40%;
	overflow: hidden;

	@media (max-width: 1024px) {
		margin-top: 100px;
		width: 70%;
	}
	@media (max-width: 768px) {
		margin-top: 100px;
		width: 90%;
	}
	@media (max-width: 768px) {
		margin-top: 0;
	}
`;

const AboutHeader = styled(motion.div)`
	display: flex;
	align-items: center;
	overflow: hidden;
	text-align: left;
	margin: 50px 0;
	border-left: 10px solid hsl(360, 64%, 55%);

	h2 {
		font-size: 3rem;
		color: hsl(360, 64%, 55%);
		padding-left: 10%;
		margin: 0;
		width: 100%;

		@media (max-width: 768px) {
			font-size: 2.5rem;
		}
		@media (max-width: 500px) {
			font-size: 2rem;
		}
	}
`;

const Skills = styled(motion.div)`
	width: 40%;
	overflow: hidden;

	@media (max-width: 1024px) {
		margin-bottom: 50px;
		width: 70%;
	}
	@media (max-width: 768px) {
		width: 90%;
	}
`;

const SkillSet = styled(motion.ul)`
	display: flex;
	justify-content: space-between;

	@media (max-width: 500px) {
		flex-direction: column;
	}

	div {
		padding-right: 10%;
	}

	li {
		font-weight: bold;
		list-style: none;
		padding: 10px 0;
		overflow: hidden;
		display: flex;
		align-items: center;

		@media (max-width: 500px) {
			padding: 0;
		}

		img {
			width: 50px;
			height: 50px;
			object-fit: center;
			margin-right: 15px;
		}

		p {
			margin: 0;
			padding: 0;
		}
	}
`;

const ScrollDown = styled.div`
	height: 50px;
	width: 100%;
	display: flex;
	align-items: center;
	margin-top: 50px;

	@media (max-width: 1024px) {
		margin-left: 15%;
	}
	@media (max-width: 768px) {
		margin-left: 5%;
	}

	p {
		letter-spacing: 4px;
		padding-left: 50px;
		margin: 0;
		color: hsl(360, 64%, 55%);
	}

	img {
		height: 50px;
		width: 8px;
	}
`;

export default About;
