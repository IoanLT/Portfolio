import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import athlete from '../assets/athlete-small.png';
import theracer from '../assets/theracer-small.png';
import goodtimes from '../assets/goodtimes-small.png';
// Animations
import { motion } from 'framer-motion';
import { pageAnimation, textFade, photoAnimation, lineAnimation, slider } from '../animation';

const OurWork = () => {
    return (
        <Work
            variants={pageAnimation}
            initial="hidden"
            animate="show"
            exit="exit"
        >
            {/* <Frame1 variants={slider}></Frame1>
            <Frame2 variants={slider}></Frame2>
            <Frame3 variants={slider}></Frame3>
            <Frame4 variants={slider}></Frame4> */}

            <Movie>
                <motion.h2 variants={textFade}>
                    The Athlete
                </motion.h2>
                <motion.div variants={lineAnimation} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <Hide>
                        <motion.img variants={photoAnimation} src={athlete} alt="boxer" />
                    </Hide>                    
                </Link>   
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="/work/the-racer">
                    <img src={theracer} alt="racer" />
                </Link>   
            </Movie>
            <Movie>
                <h2>Good times</h2>
                <div className="line"></div>
                <Link to="/work/good-times">
                    <img src={goodtimes} alt="lovers" />
                </Link>   
            </Movie>
        </Work>
    )
}

const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;

    h2 {
        padding: 1rem 0;
    }
`

const Movie = styled.div`
    padding-bottom: 10rem;

    .line {
        height: 0.5rem;
        background: #23d997;
        margin-bottom: 3rem;
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }

    h2 {
        color: #fff;
    }
`

const Hide = styled.div`
    overflow: hidden;
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

export default OurWork;
