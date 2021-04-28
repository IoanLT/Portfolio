import React from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import styled from "styled-components";
import { imageAnimation, gridAnimation } from "../animation";
// import custom hook
import { useScroll } from "./useScroll";

export default function ContactForm({ setShowModal }) {
	const [element, controls] = useScroll();

	function sendEmail(e) {
		e.preventDefault();

		emailjs
			.sendForm(
				"contact_service",
				"contact_form",
				e.target,
				"user_pyx4chjQUt4qhMlEz8Wq6"
			)
			.then(
				(result) => {
					console.log(result.text);
					setShowModal(true)
				},
				(error) => {
					console.log(error.text);
				}
			);
		e.target.reset();
	}

	return (
		<Form
			onSubmit={sendEmail}
			ref={element}
			variants={gridAnimation}
			initial="hidden"
			animate={controls}
		>
			<motion.input
				variants={imageAnimation}
				type="text"
				name="name"
				placeholder="Name"
				required
			/>
			<motion.input
				variants={imageAnimation}
				type="email"
				name="email"
				placeholder="Email"
				required
			/>
			<motion.textarea
				variants={imageAnimation}
				name="message"
				placeholder="Message"
				required
			/>
			<motion.button
				variants={imageAnimation}
				type="submit"				
			>
				Send message
			</motion.button>
		</Form>
	);
}

const Form = styled(motion.form)`
	width: 500px;
	height: 100%;
	text-align: left;
	display: flex;
	flex-direction: column;
	margin-right: 50px;
	overflow: hidden;

	@media (max-width: 1130px) {
		width: 100%;
		margin-right: 0;
	}

	h4 {
		margin-bottom: 30px;
		font-size: 1.5rem;
	}

	input {
		width: 100%;
		height: 42px;
		margin-bottom: 30px;
		border-radius: 5px;
		padding: 0 10px;
		font-size: 1rem;
	}

	textarea {
		width: 100%;
		height: 150px;
		margin-bottom: 30px;
		border-radius: 5px;
		padding: 10px;
		font-size: 1rem;

		overflow: scroll;
		::-webkit-scrollbar {
			display: none;
		}
		-ms-overflow-style: none;
		scrollbar-width: none;
	}

	button {
		width: 250px;
		font-size: 1rem;
		font-weight: 400;
		margin: 0;

		@media (max-width: 500px) {
			width: 100%;
			margin-right: 0;
		}
	}
`;
