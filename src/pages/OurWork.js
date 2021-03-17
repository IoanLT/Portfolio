import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import athlete from '../assets/athlete-small.png';
import theracer from '../assets/theracer-small.png';
import goodtimes from '../assets/goodtimes-small.png';

const OurWork = () => {
    return (
        <Work>
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to="/work/the-athlete">
                    <img src={athlete} alt="boxer" />
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

const Work = styled.div`
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
        background: #ccc;
        margin-bottom: 3rem;
    }

    img {
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

export default OurWork;
