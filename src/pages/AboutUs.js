import React from 'react';
// Page components
import About from '../components/About';
import Faq from '../components/Faq';
import Services from '../components/Services';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animation';

const AboutUs = () => {
    return (
        <motion.div 
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            <About />
            <Services />
            <Faq />
        </motion.div>
    )
}

export default AboutUs;