import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
// import home1 from '../assets/home1.png';
import styled from 'styled-components';
import { Hide } from '../styles';
import { motion } from 'framer-motion';
import { titleAnimation, textFade, portfolioAnimation } from '../animation';
// import Wave from './Wave';
import arrowRight from '../assets/Arrow-right-white.svg';
import bannerImage from '../assets/background2.png';
// import bannerImage from '../assets/background3.jpg';

const Hero = () => {

    return (
        <HeroWrapper id="home">
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h1 variants={titleAnimation}>
                            Ioan Tranole
                        </motion.h1>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>
                            Web Development /
                        </motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>
                            UI Design
                        </motion.h2>
                    </Hide>
                </motion.div>
               
               <ScrollLink                    
                        to="about"
                        activeClass="active"                        
                        spy={true}
                        smooth={true}                        
                        duration={1000}
                    >
                    <motion.button variants={textFade}>                                           
                        Find out more
                        <img src={arrowRight} alt="arrow-right" />                      
                    </motion.button>
                </ScrollLink>
            </Description>

            <Portfolio 
                variants={portfolioAnimation}
                initial="hidden"
                animate="show"
            >               
                <motion.h1>Portfolio</motion.h1>
            </Portfolio>           
            {/* <Wave /> */}
        </HeroWrapper>
    )
}

const HeroWrapper = styled(motion.div)`
    height: 100vh;
    width: 100%;
    display: flex;  
    flex-wrap: wrap;  
    align-items: center;
    justify-content: space-around;    
    padding: 0 5%;
    color: #fff;    
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${bannerImage});  
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; 

    @media (max-width: 1024px) {
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
    } 
`

const Description = styled.div`
    width: 50%;   
    display: flex; 
    flex-direction: column;

    @media (max-width: 1024px) {
        width: auto;
    }
    @media (max-width: 520px) {               
        width: 90%;               
    }
    
    h1 {
        font-size: 2rem;
        
        @media (max-width: 520px) {               
            font-size: 1.5rem;               
        }
        @media (max-width: 375px) {               
            font-size: 1.2rem;               
        }
    }

    h2 {
        font-weight: lighter;

        @media (max-width: 520px) {               
            font-size: 2.5rem;               
        }
        @media (max-width: 375px) {               
            font-size: 2rem;               
        }
    }

    button {
        width: 250px;

        @media (max-width: 500px) {               
           margin-top: 50px;          
        }
    }

    a {
        width: 250px;        
    }
`

export const Portfolio = styled(motion.div)`
    overflow: hidden;
    text-align: left;
    width: 50%;
    border-left: 10px solid hsl(360, 64%, 55%);

    @media (max-width: 1024px) {        
        margin-bottom: 50px;        
        width: 444px;
        overflow: none;        
    }
    @media (max-width: 520px) {               
        width: 90%;               
    }

    h1 {
        font-family: 'Montserrat', sans-serif;
        font-size: 5rem;
        font-weight: 600;       
        color: hsl(360, 64%, 55%);
        padding-left: 10%;
        margin: 0;
        
        @media (max-width: 1024px) {
            font-size: 4rem;                        
        }
        @media (max-width: 768px) {
            font-size: 3.5rem;                        
        }
        @media (max-width: 520px) {               
            font-size: 3rem;               
        }
        @media (max-width: 375px) {               
            font-size: 2.5rem;               
        }
    }
`

export default Hero;