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
        <ContactSection id="projects" ref={element}>
            <ContactHeader>
                <motion.h2>Get in touch</motion.h2>
            </ContactHeader>

            <ContentWrapper>           

                {/* <FormWrapper> */}
                    <ContactForm />
                {/* </FormWrapper>                 */}
                <SocialMedia>
                    <h4>You can find me on</h4>
                    <SocialMediaLinks id="social-media-links">
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
    padding: 0 20%;
    color: #fff; 
    /* margin-bottom: 100px;  */

    @media (max-width: 1024px) {
        height: 100%;
        padding: 0 18%;
    }   
    @media (max-width: 768px) {        
        padding: 0 10%;
    }  
`

const ContactHeader = styled(ProjectHeader)`
    margin-bottom: 100px;
`

const ContentWrapper = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    /* justify-content: space-around; */
    width: 100%;
`

// const FormWrapper = styled(motion.div)`
//     width: 50%; 
//     display: flex;   
//     padding: 10px;
//     border: 1px solid #fff;
// `

const SocialMedia = styled(motion.div)`
    margin-left: auto;
    width: 400px;
    text-align: center;

    h4 {
        font-size: 1.5rem;
        margin-bottom: 50px;
    }
`

const SocialMediaLinks = styled(motion.ul)`
    display: flex;
    justify-content: space-around;    

    li {
        display: flex;
        width: 100px;
        height: 100px;    
        border-radius: 50%;
        position: relative;
        font-size: 50px;

        /* Rotate 45 deg and scale down */
        /* transform: rotate(45deg) scale(0.8); */
        overflow: hidden;
        transition: all .5s ease-in;

        ::before {
            content:'';
            display: block;
            width: 50%;
            height: 100%;
            position: absolute;
            z-index: -2;
        }

        ::after {
            content:'';
            display: block;
            width: 100%;
            height: 100%;
            border-radius: 50%;
            position: absolute;
            top: 0;
            right: 50%;
            z-index: -3;
            transition: all .5s ease-in-out;
            opacity: .5;
        }

        a {
            color: white;
            margin: auto;
            text-shadow: 0 2px 0 rgb(2,2,2);
            /* transform: rotate(-45deg); */
            transition: all .5s ease-in;

            &:hover {
                transform: rotate(360deg);
            }
        }
    }
`

export default Contact;
