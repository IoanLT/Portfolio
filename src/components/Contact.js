import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { ProjectHeader } from "./Projects";
// import custom hook
import { useScroll } from "./useScroll";
import ContactForm from "./ContactForm";
// Social media icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import animations
import { menuAnimation, titleAnimation } from "../animation";

const Contact = ({ setShowModal }) => {
	const [element, controls] = useScroll();

	return (
		<ContactSection id="contact" ref={element}>
			<ContactHeader>
				<motion.h2>Get in touch</motion.h2>
			</ContactHeader>

			<ContentWrapper
				ref={element}
				variants={menuAnimation}
				animate={controls}
				initial="hidden"
			>
				<ContactForm setShowModal={setShowModal} />

				<SocialMedia
					ref={element}
					variants={menuAnimation}
					animate={controls}
					initial="hidden"
				>
					<motion.h4 variants={titleAnimation}>Or contact me at</motion.h4>
					<motion.h5 variants={titleAnimation}>
						ioan.tranole@gmail.com
					</motion.h5>
					<motion.h5 variants={titleAnimation}>+44 7551 454843</motion.h5>
					<motion.h4 variants={titleAnimation}>
						You can also find me at
					</motion.h4>
					<SocialMediaLinks>
						<li>
							<a
								href="https://github.com/IoanLT"
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon icon={faGithub} />
							</a>
						</li>

						<li>
							<a
								href="https://www.linkedin.com/in/ioantranole/"
								target="_blank"
								rel="noreferrer"
							>
								<FontAwesomeIcon icon={faLinkedin} />
							</a>
						</li>
					</SocialMediaLinks>
				</SocialMedia>
			</ContentWrapper>
		</ContactSection>
	);
};

const ContactSection = styled(motion.section)`
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	padding: 0 15%;
	color: #fff;

	@media (max-width: 1450px) {
		padding: 0 10%;
	}
	@media (max-width: 1270px) {
		padding: 0 5%;
	}
	@media (max-width: 1130px) {
		padding: 0 18%;
	}
	@media (max-width: 768px) {
		padding: 0 10%;
	}
`;

const ContactHeader = styled(ProjectHeader)`
	h2 {
		@media (max-width: 768px) {
			font-size: 2.5rem;
		}
		@media (max-width: 500px) {
			font-size: 2rem;
		}
	}
`;

const ContentWrapper = styled(motion.div)`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: flex-end;

	@media (max-width: 1130px) {
		align-items: center;
		justify-content: flex-start;
	}
`;

const SocialMedia = styled(motion.div)`
	width: 400px;
	text-align: left;
	margin: 80px 0;
	margin-left: 50px;
	overflow: hidden;

	@media (max-width: 1130px) {
		margin-left: 0;
		margin: 150px 0;
		width: 100%;
		text-align: center;
		align-self: center;
	}

	h4 {
		font-size: 1.5rem;
		margin-bottom: 20px;

		@media (max-width: 500px) {
			font-size: 1.2rem;
		}
		@media (max-width: 350px) {
			font-size: 1rem;
		}
	}

	h5 {
		font-size: 1.3rem;
		margin-bottom: 20px;
		font-weight: 400;
		color: hsl(360, 64%, 55%);

		:nth-child(3) {
			margin-bottom: 50px;
		}

		@media (max-width: 500px) {
			font-size: 1.2rem;
		}
		@media (max-width: 350px) {
			font-size: 1rem;
		}
	}
`;

const SocialMediaLinks = styled(motion.ul)`
	display: flex;

	@media (max-width: 1130px) {
		justify-content: center;
	}

	li {
		display: flex;
		position: relative;
		font-size: 40px;
		overflow: hidden;
		transition: all 1s ease-in;

		a {
			color: #fff;
			margin-right: 40px;
			padding: 0 5px;
			text-shadow: 0 2px 0 rgb(2, 2, 2);
			transition: all 0.75s ease-in;
			overflow: hidden;

			@media (max-width: 768px) {
				margin-right: 20px;
			}

			&:hover {
				transform: rotate(360deg);
			}
		}

		:nth-child(1) {
			a {
				color: #fff;
			}
		}
	}
`;

export default Contact;
