import React from 'react';
import home1 from '../assets/home1.png';
// import styled from 'styled-components';
import { AboutWrapper, Description, Image, Hide } from '../styles';
import { motion } from 'framer-motion';
import { titleAnimation, textFade, photoAnimation } from '../animation';
import Wave from './Wave';


const About = () => {


    return (
        <AboutWrapper>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>
                            We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>
                            your <span>dreams</span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>
                            true
                        </motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={textFade}>
                    Contact us for any photography idea that you have.
                </motion.p>
                <motion.button variants={textFade}>
                    Contact Us
                </motion.button>
            </Description>
            <Image>
                <motion.img variants={photoAnimation} src={home1} alt="cameraman" />
            </Image>
            <Wave />
        </AboutWrapper>
    )
}

export default About;