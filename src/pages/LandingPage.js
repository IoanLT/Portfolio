import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
// Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const LandingPage = ({ setShowModal }) => {
	return (
		<motion.main
			className="main-wrapper"
			variants={pageAnimation}
			initial="hidden"
			animate="show"
			exit="exit"
		>
			<Hero />
			<About />
			<Projects />
			<Contact setShowModal={setShowModal} />
		</motion.main>
	);
};

export default LandingPage;
