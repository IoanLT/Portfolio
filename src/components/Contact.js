import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import { ProjectHeader } from './Projects';
// import custom hook
import { useScroll } from './useScroll';
import ContactForm from './ContactForm';
// Social media icons 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

// import contactForm from '../components/contactForm';
// import animations
// import { titleAnimation, sectionAnimation, gridAnimation, imageAnimation } from '../animation';

const Contact = () => {
    const [element, controls] = useScroll();

    return (
        <ContactSection id="contact" ref={element}>
            <ContactHeader>
                <motion.h2>Get in touch</motion.h2>                
            </ContactHeader>

            <ContentWrapper>        
                <ContactForm />
               
                <SocialMedia>
                    <h4>Send me an email at</h4>
                    <h5>ioan.tranole@gmail.com</h5>
                    <h4>You can also find me on</h4>
                    <SocialMediaLinks>
                        <li>
                            <a
                                href="https://github.com/IoanLT"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://twitter.com/LtIoan"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/ioantranole/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </li>
                        
                    </SocialMediaLinks>
                </SocialMedia>
            </ContentWrapper>
        </ContactSection>
    )
}

const ContactSection = styled(motion.section)`
    min-height: 100vh;
    width: 100%;      
    display: flex;
    flex-direction: column;    
    justify-content: center;    
    padding: 0 15%;
    color: #fff;     

    @media (max-width: 1450px) {        
        padding: 0 10%;
    }   
    @media (max-width: 1270px) {        
        padding: 0 5%;
    }   
    @media (max-width: 1130px) {         
        padding: 0 18%;
    }   
    @media (max-width: 768px) {         
        padding: 0 10%;
    }   
    
`

const ContactHeader = styled(ProjectHeader)`
    margin-bottom: 100px;  

    h2 {
        @media (max-width: 768px) {
            font-size: 2.5rem;
        }
        @media (max-width: 500px) {
            font-size: 2rem;
        }
    }     
`

const ContentWrapper = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;  
    align-items: flex-end; 

    @media (max-width: 1130px) {        
        align-items: center;
        justify-content: flex-start;        
    }
`

const SocialMedia = styled(motion.div)`    
    width: 400px;    
    text-align: left;  
    margin: 100px 0;  
    margin-left: 50px;

    @media (max-width: 1130px) {        
        margin-left: 0;        
        width: 100%;
        text-align: center; 
        align-self: center;
    }

    h4 {
        font-size: 1.5rem;
        margin-bottom: 20px;

        /* @media (max-width: 768px) {
            font-size: 1.3rem;
        } */
        @media (max-width: 500px) {
            font-size: 1.2rem;
        }
    }

    h5 {
        font-size: 1.3rem;
        margin-bottom: 70px;
        font-weight: 400;
        color: hsl(360, 64%, 55%);        
    }
`

const SocialMediaLinks = styled(motion.ul)`
    display: flex;
    
    @media (max-width: 1130px) {        
        justify-content: center;
    }

    li {
        display: flex;       
        position: relative;
        font-size: 40px;
        overflow: hidden;
        transition: all 1s ease-in;
        
        a {
            color: #fff;            
            margin-right: 40px;
            padding: 0 5px;
            text-shadow: 0 2px 0 rgb(2,2,2);            
            transition: all .75s ease-in;

            @media (max-width: 768px) {        
                margin-right: 20px;
            }

            &:hover {
                transform: rotate(360deg);
            }            
        }

        :nth-child(1) {
            a {                
                color: #6e40c9;                
            }            
        }

        :nth-child(2) {
            a {                
                color: #1A91DA;
            }            
        }

        :nth-child(3) {
            a {                
                color: #65D6AD;
            }            
        }        
    }
`

export default Contact;
