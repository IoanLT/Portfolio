import React from 'react';
// Page components
import Hero from '../components/Hero';
import Faq from '../components/Faq';
import About from '../components/About';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const LandingPage = () => {
    return (
        <motion.div 
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <Hero />
            <About />            
            <Faq />
        </motion.div>
    )
}

export default LandingPage;