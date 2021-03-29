import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
// import home1 from '../assets/home1.png';
import styled from 'styled-components';
import { Image, Hide } from '../styles';
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
            {/* <Image>
                <motion.img variants={photoAnimation} src={home1} alt="cameraman" />
            </Image> */}
            {/* <Wave /> */}
        </HeroWrapper>
    )
}

const HeroWrapper = styled(motion.div)`
    height: 100vh;
    width: 100vw;
    display: flex;  
    flex-wrap: wrap;  
    align-items: center;
    justify-content: space-around;
    /* padding: 5rem 10rem; */
    padding: 0 5%;
    color: #fff;    
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${bannerImage});  
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;  
`

const Description = styled.div`
    width: 50%;
    /* padding-right: 5rem; */
    h1 {
        font-size: 2rem;
        /* color: hsl(360, 64%, 55%); */
    }

    h2 {
        font-weight: lighter;
    }
`

export const Portfolio = styled(motion.div)`
    overflow: hidden;
    text-align: left;
    width: 50%;
    border-left: 10px solid hsl(360, 64%, 55%);

    h1 {
        font-size: 6rem;
        color: hsl(360, 64%, 55%);
        padding-left: 10%;
        margin: 0;

        @media (max-width: 1440px) {
            font-size: 5rem;
        }
    }
`

export default Hero;