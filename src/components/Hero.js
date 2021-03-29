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
        <AboutWrapper id="home">
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
                {/* <motion.p variants={textFade}>
                    Contact us for any photography idea that you have.
                </motion.p> */}
                <ScrollLink                    
                        to="about"
                        activeClass="active"                        
                        spy={true}
                        smooth={true}
                        // offset={-80}
                        duration={1000}
                >
                    <motion.button variants={textFade}>
                        Find out more
                        <img src={arrowRight} alt="arrow-right" />
                    </motion.button>
                </ScrollLink>
            </Description>
            <PortfolioWrapper 
                variants={portfolioAnimation}
                initial="hidden"
                animate="show"
            >               
                <motion.h1>Portfolio</motion.h1>
            </PortfolioWrapper>
            {/* <Image>
                <motion.img variants={photoAnimation} src={home1} alt="cameraman" />
            </Image> */}
            {/* <Wave /> */}
        </AboutWrapper>
    )
}

const AboutWrapper = styled(motion.div)`
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

    h2 {
        font-weight: lighter;
    }
`

const PortfolioWrapper = styled(motion.div)`
    overflow: hidden;
    text-align: left;
    width: 50%;
    border-left: 10px solid hsl(360, 64%, 55%);

    h1 {
        font-size: 6rem;
        color: hsl(360, 64%, 55%);
        padding-left: 10%;
        margin: 0;
    }
`

export default Hero;