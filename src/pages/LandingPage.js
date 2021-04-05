import React from 'react';
// Page components
import Hero from '../components/Hero';
// import Faq from '../components/Faq';
import About from '../components/About';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';
import Projects from '../components/Projects';
import Contact from '../components/Contact';


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
    )
}

export default LandingPage;