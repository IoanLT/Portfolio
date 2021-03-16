import React from 'react';
import home1 from '../assets/home1.png';
// import styled from 'styled-components';
import { AboutWrapper, Description, Image, Hide } from '../styles';

const About = () => {
    return (
        <AboutWrapper>
            <Description>
                <div className="title">
                    <Hide>
                        <h2>We work to make</h2>
                    </Hide>
                    <Hide>
                        <h2>yours <span>dreams</span> come</h2>
                    </Hide>
                    <Hide>
                        <h2>true</h2>
                    </Hide>
                </div>
                <p>Contact us for any photography idea that you have.</p>
                <button>Contact Us</button>
            </Description>
            <Image>
                <img src={home1} alt="cameraman" />
            </Image>
        </AboutWrapper>
    )
}

export default About;