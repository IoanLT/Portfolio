import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import authorsDevices from '../assets/authors-devices.png';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation, textFade, photoAnimation, lineAnimation, contentAnimation, wrapAnimation } from '../animation';
// Import components 
import { MusicMain, Banner, Devices, Concept, Development, Back } from '../pages/MusicPlayer';
import { List, ListItem } from '../pages/JobPortal';
import arrowRight from '../assets/Arrow-right-black.svg';
import backArrow from '../assets/backArrow.svg';
import line from '../assets/Line 54.svg';

const Authors = () => {
    return (     
        <AuthorsMain                           
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >           
            <Banner>
                <motion.h2 variants={textFade}>
                    Authxrs
                </motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>                
                <Devices>
                    <motion.img variants={photoAnimation} src={authorsDevices} alt="mobile and desktop" />
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
                        Authxrs is a socially aware and sustainable publishing house supporting suppressed voices worldwide. 
                        The project is devoted to people who would like to share their stories who otherwise would not have 
                        the opportunity. <br/>
                        The goal was to give non Western voices a platform to be heard from, that is not edited or censored in 
                        any way by the Western world. These stories are told from real people from all over the globe.                       
                    </motion.p>
                </motion.div>
                <motion.button variants={textFade}>
                    <a
                        href="https://the-authors.netlify.app/"
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
                        The project has been built with React using both class and functional components. 
                        The frontend environment consists of several areas: <br/>
                        <List>
                            <ListItem>
                                Tell story form: Which allows a user send messages directly to the authors gmail account.
                            </ListItem>
                            <ListItem>
                                Contact form: For those who would like to become a part of the authors community 
                                and just lend a hand or may have questions.
                            </ListItem>
                            <ListItem>
                                Storybook preorder form: Directly connects to payment form based on stripe payment system.
                            </ListItem>
                            <ListItem>
                                Stripe payment checkout: Allows the user to make a purchase and enter their credit 
                                card credentials, accepts credit card online payments and sends this information 
                                back to the Stripe system.
                            </ListItem>
                        </List>                        
                    </motion.p>
                </motion.div>
                <motion.button variants={textFade}>
                    <a
                        href="https://github.com/yuryiva/authors-frontend"
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
        </AuthorsMain>        
    )
}

const AuthorsMain = styled(MusicMain)`
    a {
        width: 250px;
        align-self: center;
    }
`

export default Authors;
