import React from 'react';
// Import icons
import clock from '../assets/clock.svg';
import diaphragm from '../assets/diaphragm.svg';
import money from '../assets/money.svg';
import teamwork from '../assets/teamwork.svg';
import home2 from '../assets/home2.png';

import styled from 'styled-components';
import { textFade } from '../animation';
// Import styles
import { AboutWrapper, Description, Image } from '../styles';
// import custom hook
import { useScroll } from './useScroll';

const About = () => {
    const [element, controls] = useScroll();

    return (
        <ServicesWrapper
            id="about"
            ref={element}
            variants={textFade}
            animate={controls}
            initial="hidden"
        >
            <ServiceDescription>                              

                    <Card>
                        <div className="icon">
                            <img src={money} alt="money" />
                            <h3>Affordable</h3>
                        </div>
                        <p>lorem ipsum dolor sit amet</p>
                    </Card>            
                
            </ServiceDescription>              
            
            {/* <Image>
                <img src={home2} alt="camera" /> 
            </Image>                    */}
        </ServicesWrapper>
    )
}

const ServicesWrapper = styled(AboutWrapper)`
    height: 100vh;
    width: 100vw;
    display: flex;  
    flex-wrap: wrap;  
    align-items: center;
    justify-content: space-around;    
    padding: 0 5%;
    color: #fff;     
    
`;

const ServiceDescription = styled(Description)` 
    display: flex; 
    flex-direction: column;  
    padding-right: 0;
    padding-left: 5rem;
    align-items: flex-end;    

    h2 {
        padding-bottom: 5rem;        
    }
`

// const Cards = styled.div`
//     display: flex;  
//     justify-content: flex-end;    
//     flex-wrap: wrap;
// `

const Card = styled.div`
    flex-basis: 20rem;

    .icon {
        display: flex;
        align-items: center;

        h3 {
            margin-left: 1rem;            
            padding: 1rem;
        }
    }
`

export default About;
