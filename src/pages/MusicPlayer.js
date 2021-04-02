import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import musicDevices from '../assets/music-player-devices.png';

// Animations
import { motion } from 'framer-motion';
import { pageAnimation, textFade, photoAnimation, lineAnimation } from '../animation';

import arrowRight from '../assets/Arrow-right-black.svg';
import backArrow from '../assets/backArrow.svg';
import line from '../assets/Line 54.svg';
// import custom scroll hook
import { useScroll } from '../components/useScroll';
import Projects from '../components/Projects';

const MusicPlayer = () => {
    const [element, controls] = useScroll();

    return (     
        <MusicMain
            ref={element}                    
            // animate={controls}                    
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            {/* <Frame1 variants={slider}></Frame1>
            <Frame2 variants={slider}></Frame2>
            <Frame3 variants={slider}></Frame3>
            <Frame4 variants={slider}></Frame4> */}

            <Banner>
                <motion.h2 variants={textFade}>
                    Chillhop Music Player
                </motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>                
                <Devices>
                    <motion.img variants={photoAnimation} src={musicDevices} alt="music player" />
                </Devices>           
            </Banner>

            <Concept>
                <div className="concept-heading">
                    <img src={line} alt="line" />
                    <h3>Concept</h3>
                </div>
                <div className="concept-text">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.                        
                    </p>
                </div>
                <button variants={textFade}>
                    <a
                        href="https://chillhop-music-app.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                    >                    
                        Visit Site
                        <img src={arrowRight} alt="arrow-right" />                    
                    </a>
                </button>
            </Concept>

            <Development>
                <div className="development-heading">
                    <img src={line} alt="line" />
                    <h3>Development</h3>
                </div>
                <div className="development-text">
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book.                        
                    </p>
                </div>
                <button variants={textFade}>
                    <a
                        href="https://github.com/IoanLT/Chillhop-music-player"
                        target="_blank"
                        rel="noreferrer"
                    >                    
                        See on Github
                        <img src={arrowRight} alt="arrow-right" />                    
                    </a>
                </button>
            </Development>

           {/* <Link
                to={{
                    pathname: "/",                    
                    hash: "#projects"                    
                }}
            > */}
            <a href="/#projects">
                <Back>                  
                    <img src={backArrow} alt="arrow back" />
                    <h4>BACK</h4>                    
                </Back>
            </a>             
            {/* </Link> */}
        </MusicMain>        
    )
}

const MusicMain = styled(motion.section)`
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
    } 

    @media (max-width: 1024px) {
        padding: 0 15%;
    }
    @media (max-width: 500px) {
        padding: 0 10%;
    }
`

const Banner = styled.div`
    padding-bottom: 10rem;

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

const Devices = styled.div`
    overflow: hidden;
    /* padding: 0 15%; */
`

const Concept = styled(motion.div)`
    /* padding: 0 15%; */
    display: flex;
    flex-direction: column;    
    margin-bottom: 100px;
    width: 100%;
    flex-wrap: wrap;    

    .concept-heading {
        display: flex;
        align-items: center;
        padding-right: 50px;
        margin-bottom: 30px;
        /* min-width: 450px; */
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

        @media (max-width: 500px) {               
           margin-top: 50px;          
        }
    }

    .concept-text {
        width: 100%;
    }    
`

const Development = styled(Concept)`

    .development-heading {
        display: flex;
        align-items: center;
        padding-right: 50px;
        margin-bottom: 30px;
        /* min-width: 450px; */
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
    

    &:hover {        
        transform: translateX(-10px);
        transition: all 0.3s ease-in-out;
        cursor: pointer;
    }

    img {
        width: 80px;
        padding-right: 30px;

        &:hover {        
            transform: translateX(-10px);
            transition: all 0.3s ease-in-out;
        }
    }

    h4 {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        letter-spacing: 5px;
    }    
`

// Frame animations
// const Frame1 = styled(motion.div)`
//     position: fixed;
//     left: 0;
//     top: 80px;
//     width: 100%;
//     height: 100vh;
//     background: #fffebf;
//     z-index: 2;
// `

export default MusicPlayer;
