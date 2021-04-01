import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import musicDevices from '../assets/music-player-devices.png';

// Animations
import { motion } from 'framer-motion';
import { pageAnimation, textFade, photoAnimation, lineAnimation, slider } from '../animation';

import line from '../assets/Line 54.svg';
// import custom scroll hook
import { useScroll } from '../components/useScroll';

const MusicPlayer = () => {
    const [element, controls] = useScroll();

    return (     
        <MusicMain
            ref={element}                    
            animate={controls}                    
            variants={pageAnimation}
            initial="hidden"
            // animate="show"
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
            </Development>
            
        </MusicMain>        
    )
}

const MusicMain = styled(motion.section)`
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    background: #fff;
    padding: 0 20%;   

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
        color: #000;   

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
            color: #000; 

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
            color: #000;   

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
