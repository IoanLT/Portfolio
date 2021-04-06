import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import musicDevices from '../assets/music-player-devices.png';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation, textFade, photoAnimation, lineAnimation, contentAnimation, wrapAnimation } from '../animation';

import arrowRight from '../assets/Arrow-right-black.svg';
import backArrow from '../assets/backArrow.svg';
import line from '../assets/Line 54.svg';

const MusicPlayer = () => {  

    return (     
        <MusicMain                           
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >           
            <Banner>
                <motion.h2 variants={textFade}>
                    Chillhop Music Player
                </motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>                
                <Devices>
                    <motion.img variants={photoAnimation} src={musicDevices} alt="mobile and desktop" />
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
                        The inspiration for this fun project came from one of my favourite content creators 
                        on YouTube (DevEd) where I watched him build his own music app. This application gives 
                        me a playlist of open access music, uninterrupted by advertisements, which allows for 
                        a more convenient listening experience as an end user, while discovering new artists 
                        that I wouldn't normally find on big music streaming platforms.                      
                    </motion.p>
                </motion.div>
                <motion.button variants={textFade}>
                    <a
                        href="https://chillhop-music-app.netlify.app/"
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
                        This project has been built using React hooks, SASS and Styled components. The application 
                        features a library allowing users to select which song they would like to play and also 
                        includes play, pause and skip functionality.                         
                    </motion.p>
                    <motion.p>
                        Each track has its own colours which change the background dynamically as you skip through songs.                                               
                    </motion.p>
                    <motion.p>                         
                        The application is also responsive and adapted for smaller screens.                        
                    </motion.p>
                </motion.div>
                <motion.button variants={textFade}>
                    <a
                        href="https://github.com/IoanLT/Chillhop-music-player"
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
        </MusicMain>        
    )
}

export const MusicMain = styled(motion.section)`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    background: #fff;
    padding: 0 20%;  

    a { 
        width: 100%;
        text-decoration: none;
        color: #09070B; 
        width: 250px;
        align-self: center;
    } 

    @media (max-width: 1024px) {
        padding: 0 15%;
    }
    @media (max-width: 500px) {
        padding: 0 10%;
    }
`

export const Banner = styled(motion.div)`
    margin-bottom: 100px;

    h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 700;
        font-size: 2.5rem;
        margin-top: 100px;
        padding: 1rem 0;   
        color: #09070B;   

        @media (max-width: 1024px) {
            font-size: 2rem;
        }
        @media (max-width: 500px) {
            font-size: 1.5rem;
        }  
    }

    .line {
        height: 0.5rem;
        background: hsl(360, 64%, 55%);
        margin-bottom: 3rem;
    }

    img {
        width: 100%;        
        object-fit: cover;
    }
`

export const Devices = styled.div`
    overflow: hidden;    
`

export const Concept = styled(motion.div)`   
    display: flex;
    flex-direction: column;    
    margin-bottom: 100px;
    width: 100%;
    flex-wrap: wrap; 
    overflow: hidden; 

    p {
        margin-bottom: 0;
    }  

    .concept-heading {
        display: flex;
        align-items: center;
        padding-right: 50px;
        margin-bottom: 30px;        
        width: 40%;

        img {
            width: 50px;
            height: 2px;
        }

        h3 {
            font-size: 2.2rem;
            padding-left: 40px;
            color: #09070B; 

            @media (max-width: 1024px) {
                font-size: 1.8rem;
                padding-left: 30px;
            }
            @media (max-width: 500px) {
                font-size: 1.3rem;
                padding-left: 20px;
            }           
        }             
    }

    button {
        width: 250px;
        
        &:hover {            
            background: hsl(360, 71%, 66%);
        }

        a {
            text-decoration: none;
            color: #09070B;
        }
    }

    .concept-text {
        width: 100%;
    }    
`

export const Development = styled(Concept)`

    .development-heading {
        display: flex;
        align-items: center;
        padding-right: 50px;
        margin-bottom: 30px;        
        width: 40%;

        img {
            width: 50px;
            height: 2px;
        }

        h3 {
            font-size: 2.2rem;
            padding-left: 40px;
            color: #09070B;   

            @media (max-width: 1024px) {
                font-size: 1.8rem;
                padding-left: 30px;
            }
            @media (max-width: 500px) {
                font-size: 1.3rem;
                padding-left: 20px;
            }         
        }
    }

    .development-text {
        width: 100%;
    }
`

export const Back = styled.div`
    width: 250px;
    display: flex;  
    margin: 0 auto;  
    margin-bottom: 100px;
    transform: translateX(0);
    transition: all 0.3s ease-in-out;
    

    &:hover {        
        transform: translateX(-10px);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }

    img {
        width: 80px;
        padding-right: 30px;
        transform: translateX(0);
        transition: all 0.3s ease-in-out;

        &:hover {        
            transform: translateX(-10px);
            transition: all 0.3s ease-in-out;
        }
    }

    h4 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        letter-spacing: 5px;

        @media (max-width: 500px) {
            font-size: 1.5rem;            
        }
    }    
`

export default MusicPlayer;
