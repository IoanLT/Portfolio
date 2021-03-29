import React from 'react';
// Import icons
// import clock from '../assets/clock.svg';
// import diaphragm from '../assets/diaphragm.svg';
// import money from '../assets/money.svg';
// import teamwork from '../assets/teamwork.svg';
// import home2 from '../assets/home2.png';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { textFade } from '../animation';

import line from '../assets/Line 54.svg';

// import custom hook
import { useScroll } from './useScroll';

const About = () => {
    const [element, controls] = useScroll();

    return (
        <AboutSection
            id="about"
            ref={element}
            variants={textFade}
            animate={controls}
            initial="hidden"
        >
            <AboutWrapper>
                <AboutDescription>
                    <AboutText>                              
                        <h2>About me</h2>
                    </AboutText>
                    <p>I’m a London based web developer who loves comunicating ideas through code 
                        to create beautiful layouts for a pleasant user experience.                    
                    </p>
                    <p>
                        I'm passionate about UX/UI design, creating user interactions and creative animations.
                    </p>                   
                    <p>
                        In my spare time I enjoy reading and learning about the latest trends in web development / design, 
                        as well as traveling with my girlfriend and dog in our campervan.
                    </p>                   
                </AboutDescription>              
                
                <Skills>
                    <AboutText>                              
                        <h2>Skills</h2>
                    </AboutText>
                    <SkillSet>
                        <div>
                            <li>                            
                                <img src={line} alt="line" />                             
                                <p>HTML/CSS</p>                         
                            </li>
                            <li>                            
                                <img src={line} alt="line" />                             
                                <p>JavaScript</p>                         
                            </li>
                            <li>                            
                                <img src={line} alt="line" />                             
                                <p>React</p>                         
                            </li>
                            <li>                            
                                <img src={line} alt="line" />                             
                                <p>Animations</p>                         
                            </li>                        
                            
                        </div>
                        <div>
                            <li>                            
                                <img src={line} alt="line" />                             
                                <p>Wireframing</p>                         
                            </li>
                            <li>                            
                                <img src={line} alt="line" />                             
                                <p>User experience</p>                         
                            </li>
                            <li>                            
                                <img src={line} alt="line" />                             
                                <p>UI Design</p>                         
                            </li>
                            <li>                            
                                <img src={line} alt="line" />                             
                                <p>Responsive Design</p>                         
                            </li>                            
                        </div>
                    </SkillSet>
                </Skills>
            </AboutWrapper>            
        </AboutSection>
    )
}

const AboutSection = styled(motion.section)`
    height: 100vh;
    width: 100%;    
    display: flex;   
    align-items: center;
    justify-content: center;    
    padding: 0 5%;
    color: #fff; 
    background-color: #09070B;    
`;

const AboutWrapper = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
`

const AboutDescription = styled(motion.div)` 
    display: flex; 
    flex-direction: column;    
    width: 40%;

    @media (max-width: 1024px) {
        margin: 50px 0;
    }
    
`

const AboutText = styled(motion.div)`    
    /* width: 300px; */    
    display: flex;
    align-items: center;
    overflow: hidden;
    text-align: left;
    margin-bottom: 50px;
    border-left: 10px solid hsl(360, 64%, 55%);

    h2 {
        font-size: 3rem;
        color: hsl(360, 64%, 55%);
        padding-left: 10%;
        margin: 0;
    }    
`

const Skills = styled(motion.div)`
    width: 40%;

    @media (max-width: 1024px) {
        margin: 50px 0;
    }
`

const SkillSet = styled(motion.ul)`
    display: flex;
    /* flex-wrap: wrap; */

    div {
        padding-right: 10%;
    }

    li {
        font-weight: bold;
        list-style: none;
        padding: 10px 0;
        overflow: hidden;
        display: flex; 
        align-items: center;        

        img {
            width: 50px;
            height: 50px;
            object-fit: center;            
            margin-right: 15px;
        }
        
        p {
            margin: 0;
            padding: 0;
        }
    }
`

export default About;
