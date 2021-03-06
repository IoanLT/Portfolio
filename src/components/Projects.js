import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
// import custom hook
import { useScroll } from "./useScroll";
// import images
import musicPlayer from "../assets/music-player-card.PNG";
import jobPortal from "../assets/job-portal-card.PNG";
import authxrs from "../assets/authxrs-card.PNG";
import janine from "../assets/janine-card.PNG";
// import animations
import {
	titleAnimation,
	sectionAnimation,
	gridAnimation,
	imageAnimation,
	imgSlider,
} from "../animation";

const Projects = () => {
	const [element, controls] = useScroll();

	return (
		<ProjectsSection id="projects" ref={element}>
			<ProjectDescription
				ref={element}
				variants={sectionAnimation}
				animate={controls}
				initial="hidden"
			>
				<ProjectHeader>
					<motion.h2>Projects</motion.h2>
				</ProjectHeader>
				<motion.p variants={titleAnimation}>
					Here is a selection of projects that I have worked on while studying
					web development at Wild Code School.
				</motion.p>
				<motion.p variants={titleAnimation}>
					Some of these include group projects and some of them are personal
					projects that I have worked on after completing the bootcamp.
				</motion.p>
			</ProjectDescription>

			<ProjectGrid
				ref={element}
				variants={gridAnimation}
				animate={controls}
				initial="hidden"
			>
				<ProjectCard variants={imageAnimation}>
					<Link to="/music-player" onClick={() => window.scrollTo(0, 0)}>
						<img src={musicPlayer} alt="music app" />
					</Link>
					<ImageSlider variants={imgSlider} />
				</ProjectCard>

				<ProjectCard variants={imageAnimation}>
					<Link to="/authors" onClick={() => window.scrollTo(0, 0)}>
						<img src={authxrs} alt="authors app" />
					</Link>
					<ImageSlider variants={imgSlider} />
				</ProjectCard>

				<ProjectCard variants={imageAnimation}>
					<Link to="/job-portal" onClick={() => window.scrollTo(0, 0)}>
						<img src={jobPortal} alt="job portal app" />
					</Link>
					<ImageSlider variants={imgSlider} />
				</ProjectCard>

				<ProjectCard variants={imageAnimation}>
					<Link to="/instabeauty" onClick={() => window.scrollTo(0, 0)}>
						<img src={janine} alt="janine" />
					</Link>
					<ImageSlider variants={imgSlider} />
				</ProjectCard>
			</ProjectGrid>
		</ProjectsSection>
	);
};

const ProjectsSection = styled(motion.section)`
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 5%;
	color: #fff;
	margin-bottom: 100px;

	@media (max-width: 1024px) {
		height: 100%;
		padding: 0 18%;
	}
	@media (max-width: 768px) {
		padding: 0 10%;
	}
`;

const ProjectDescription = styled(motion.div)`
	display: flex;
	flex-direction: column;
	overflow: hidden;
`;

export const ProjectHeader = styled(motion.div)`
	width: 100%;
	overflow: hidden;
	text-align: left;
	margin: 50px 0;
	border-left: 10px solid hsl(360, 64%, 55%);

	h2 {
		font-size: 3rem;
		color: hsl(360, 64%, 55%);
		padding-left: 5%;
		margin: 0;

		@media (max-width: 1024px) {
			padding-left: 10%;
		}
		@media (max-width: 768px) {
			font-size: 2.5rem;
		}
		@media (max-width: 500px) {
			font-size: 2rem;
		}
	}
`;

const ProjectGrid = styled(motion.div)`
	display: grid;
	overflow: hidden;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 46% 46%;
	gap: 30px 30px;
	grid-auto-flow: dense;
	margin-top: 50px;

	@media (max-width: 1024px) {
		grid-template-columns: 1fr;
		grid-template-rows: 0.95fr 0.95fr 0.95fr 0.95fr;
	}
`;

const ProjectCard = styled(motion.div)`
	position: relative;
	overflow: hidden;
	border: 1px solid #fff;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: transform 2s;
		opacity: 0.8;

		&:hover {
			cursor: pointer;
			transform: scale(1.03);
			transform-origin: 50% 50%;
			opacity: 1;
		}
	}
`;

const ImageSlider = styled(motion.div)`
	width: 100%;
	height: 100%;
	background: #09070b;
	display: none;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
`;

export default Projects;
