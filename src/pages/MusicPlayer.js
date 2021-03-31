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
                <Hide>
                    <motion.img variants={photoAnimation} src={musicDevices} alt="music player" />
                </Hide>           
            </Banner>
            
        </MusicMain>        
    )
}

const MusicMain = styled(motion.div)`
    min-height: 100vh;
    width: 100%;
    overflow: hidden;
    background: #fff;
    padding: 0 5%;   
`

const Banner = styled.div`
    padding-bottom: 10rem;

    h2 {
        margin-top: 100px;
        padding: 1rem 0;   
        color: #000;     
    }

    .line {
        height: 0.5rem;
        background: hsl(360, 64%, 55%);
        margin-bottom: 3rem;
    }

    img {
        width: 100%;
        /* height: 70vh; */
        object-fit: cover;
    }

    h2 {
        color: #fff;
    }
`

const Hide = styled.div`
    overflow: hidden;
    padding: 0 15%;
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

// const Frame2 = styled(Frame1)`
//     background: #ff8efb;
// `

// const Frame3 = styled(Frame1)`
//     background: #8ed2ff;
// `

// const Frame4 = styled(Frame1)`
//     background: #8effa0;
// `

export default MusicPlayer;
