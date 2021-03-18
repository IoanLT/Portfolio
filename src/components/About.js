import React from 'react';
import home1 from '../assets/home1.png';
// import styled from 'styled-components';
import { AboutWrapper, Description, Image, Hide } from '../styles';
import { motion } from 'framer-motion';

const About = () => {


    return (
        <AboutWrapper>
            <Description>
                <motion.div 
                   
                >
                    <Hide>
                        <motion.h2 
                           
                        >
                            We work to make
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>
                            your <span>dreams</span> come
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2>
                            true
                        </motion.h2>
                    </Hide>
                </motion.div>
                <p>Contact us for any photography idea that you have.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="cameraman" />
            </Image>
        </AboutWrapper>
    )
}

export default About;