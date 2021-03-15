import React from 'react';
import home1 from '../assets/home1.png';
import styled from 'styled-components';

const About = () => {
    return (
        <AboutWrapper>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>yours <span>dreams</span> come</h2>
                    </div>
                    <div className="hide">
                        <h2>true</h2>
                    </div>
                </div>
                <p>Contact us for any photography idea that you have.</p>
                <button>Contact Us</button>
            </div>
            <div className="image">
                <img src={home1} alt="cameraman" />
            </div>
        </AboutWrapper>
    )
}

const AboutWrapper = styled.div`

`

export default About;