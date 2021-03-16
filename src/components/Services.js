import React from 'react';
// Import icons
import clock from '../assets/clock.svg';
import diaphragm from '../assets/diaphragm.svg';
import money from '../assets/money.svg';
import teamwork from '../assets/teamwork.svg';
import home2 from '../assets/home2.png';
import styled from 'styled-components';
// Import styles
import { AboutWrapper, Description, Image } from '../styles';

const Services = () => {
    return (
        <ServicesWrapper>
            <ServiceDescription>
                <Cards>  
                    <h2>High <span>quality</span> services</h2>

                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock" />
                            <h3>Efficient</h3>
                        </div>
                        <p>lorem ipsum dolor sit amet</p>
                    </Card>

                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork" />
                            <h3>Teamwork</h3>
                        </div>
                        <p>lorem ipsum dolor sit amet</p>
                    </Card>  

                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm" />
                            <h3>Diaphragm</h3>
                        </div>
                        <p>lorem ipsum dolor sit amet</p>
                    </Card>  

                    <Card>
                        <div className="icon">
                            <img src={money} alt="money" />
                            <h3>Affordable</h3>
                        </div>
                        <p>lorem ipsum dolor sit amet</p>
                    </Card>            
                </Cards>
            </ServiceDescription>              
            
            <Image>
                <img src={home2} alt="camera" /> 
            </Image>                   
        </ServicesWrapper>
    )
}

const ServicesWrapper = styled(AboutWrapper)`
    flex-direction: row-reverse;

    p {
        width: 70%;
        padding: 2rem 0 4rem 0;
    }
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

const Cards = styled.div`
    display: flex;  
    /* justify-content: flex-end;     */
    flex-wrap: wrap;
`

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

export default Services;
