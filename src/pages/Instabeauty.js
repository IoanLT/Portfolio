import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import instabeautyDevices from '../assets/instabeauty-devices.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation, textFade, photoAnimation, lineAnimation, contentAnimation, wrapAnimation } from '../animation';

import { MusicMain, Banner, Devices, Concept, Development, Back } from '../pages/MusicPlayer';
import arrowRight from '../assets/Arrow-right-black.svg';
import backArrow from '../assets/backArrow.svg';
import line from '../assets/Line 54.svg';

const Instabeauty = () => {
    return (     
        <MainWrapper                           
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >           
            <Banner>
                <motion.h2 variants={textFade}>
                    Instabeauty 
                </motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>                
                <Devices>
                    <motion.img variants={photoAnimation} src={instabeautyDevices} alt="mobile and desktop" />
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
                <InProgress variants={textFade}>
                    {/* <a
                        href=" "
                        target="_blank"
                        rel="noreferrer"
                    >                     */}
                        <p>In progress</p>                        
                        <FontAwesomeIcon icon={faTimesCircle} size="2x" />                    
                    {/* </a> */}
                </InProgress>
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
                <InProgress variants={textFade}>
                    {/* <a
                        href=" "
                        target="_blank"
                        rel="noreferrer"
                    >                     */}
                        <p>In progress</p>                        
                        <FontAwesomeIcon icon={faTimesCircle} size="2x" />                    
                    {/* </a> */}
                </InProgress>
            </Development>

           <Link to="/#projects">            
                <Back>                  
                    <img src={backArrow} alt="arrow back" />
                    <h4>BACK</h4>                    
                </Back>           
            </Link>
        </MainWrapper>        
    )
}

const MainWrapper = styled(MusicMain)``

const InProgress = styled(motion.button)`
        display: flex;
        width: 250px;
        color: #09070B;
        align-items: center;
        justify-content: center;

        @media (max-width: 500px) {               
           margin-top: 50px;          
        }
        
        &:hover {            
            background: hsl(360, 71%, 66%);
        }

        p {
            margin: 0;
            padding-right: 20px;
        }    
`


export default Instabeauty;
