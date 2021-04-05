import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import portalDevices from '../assets/job-portal-devices.png';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation, textFade, photoAnimation, lineAnimation, contentAnimation, wrapAnimation } from '../animation';

import { MusicMain, Banner, Devices, Concept, Development, Back } from '../pages/MusicPlayer';
import arrowRight from '../assets/Arrow-right-black.svg';
import backArrow from '../assets/backArrow.svg';
import line from '../assets/Line 54.svg';

const JobPortal = () => {

    return (     
        <JobMain                           
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >           
            <Banner>
                <motion.h2 variants={textFade}>
                    Job Portal
                </motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>                
                <Devices>
                    <motion.img variants={photoAnimation} src={portalDevices} alt="mobile and desktop" />
                </Devices>           
            </Banner>

            <Concept variants={wrapAnimation}>                
                <motion.div 
                    className="concept-heading"                                      
                    variants={contentAnimation}
                >
                    <img src={line} alt="line" />
                    <h3>Concept</h3>
                </motion.div>
                <motion.div 
                    className="concept-text"                   
                    variants={contentAnimation}
                >
                    <motion.p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.                        
                    </motion.p>
                </motion.div>
                <motion.button variants={textFade}>
                    <a
                        href="https://happy-bardeen-f72460.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                    >                    
                        Visit Site
                        <img src={arrowRight} alt="arrow-right" />                    
                    </a>
                </motion.button>
            </Concept>

            <Development variants={wrapAnimation}>                
                <motion.div 
                    className="development-heading"
                    variants={contentAnimation}                    
                >
                    <img src={line} alt="line" />
                    <h3>Development</h3>
                </motion.div>
                <motion.div 
                    className="development-text"
                    variants={contentAnimation}                    
                >
                    <motion.p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.                        
                    </motion.p>
                </motion.div>
                <motion.button variants={textFade}>
                    <a
                        href="https://github.com/IoanLT/Job-portal"
                        target="_blank"
                        rel="noreferrer"
                    >                    
                        See on Github
                        <img src={arrowRight} alt="arrow-right" />                    
                    </a>
                </motion.button>
            </Development>

           <Link to="/#projects">            
                <Back>                  
                    <img src={backArrow} alt="arrow back" />
                    <h4>BACK</h4>                    
                </Back>           
            </Link>
        </JobMain>        
    )
}

const JobMain = styled(MusicMain)`
    a {
        width: 250px;
        align-self: center;
    }
`

export default JobPortal;
