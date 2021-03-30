import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Link as ScrollLink } from 'react-scroll';
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
// Animation imports
import { menuAnimation, itemAnimation, contactAnimation } from '../animation';


const BurgerMenu = ({ displayMenu, setDisplayMenu, openMenu, setOpenMenu }) => {

    const controls = useAnimation();
    const [ ref, inView ] = useInView({ threshold: 0.5 });

    useEffect(() => {
        if(inView) {
            controls.start('show');
        }
        if(!inView) {
            controls.start('hidden');
        }
    }, [controls, inView]);

    // This method will close the menu and bring the burger to the initial state
    const handleMenu = () => {
        setDisplayMenu(false);
        setOpenMenu(false);
    }

    return (
        
        <div className={displayMenu ? 'open-menu' : 'hidden-menu'}>
            <MenuWrapper 
                ref={ref}
                variants={menuAnimation}
                initial="hidden"
                animate={controls}
                exit="exit"
            >
                <MenuItems> 
                    <Link 
                        onClick={handleMenu}
                        to="/"                        
                    >
                        <ListItem variants={itemAnimation}>Home</ListItem>      
                    </Link>                   

                    <ScrollLink
                        onClick={handleMenu}
                        to="about"
                        activeClass="active"                        
                        spy={true}
                        smooth={true}                        
                        duration={1000}
                    >
                        <ListItem variants={itemAnimation}>About</ListItem>
                    </ScrollLink>  

                    <ScrollLink
                        onClick={handleMenu}
                        to="projects"
                        activeClass="active"                        
                        spy={true}
                        smooth={true}                        
                        duration={1000}
                    >
                        <ListItem variants={itemAnimation}>Projects</ListItem>
                    </ScrollLink>                   
                                       
                                                          
                    <ListItem variants={itemAnimation}>Contact</ListItem>                 
                </MenuItems>

                <Contact variants={contactAnimation} >
                    <div className="contact-mobile">
                        <FontAwesomeIcon icon={faMobile} size="2x" />
                        <p>07551 454 843</p> 
                    </div>
                    <div className="social-media">
                        <a                             
                            // style={{ textDecoration: "none", color: "color: #000;" }}
                            href="https://github.com/IoanLT"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a 
                            // style={{ textDecoration: "none", color: "color: #000;" }}
                            href="https://www.linkedin.com/in/ioantranole/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        </a>         
                        
                    </div>
                    
                </Contact>
            </MenuWrapper>
        </div>
    )
}

const MenuWrapper = styled(motion.nav)`
    height: 80%;
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;    
`

const MenuItems = styled(motion.ul)`
    text-align: center;
    /* text-align: left; */
    overflow: hidden;
    /* width: 80%; */

    a {
        text-decoration: none;
    }
`

const ListItem = styled(motion.li)`
    text-decoration: none;
    list-style: none;
    width: 100%;
    padding: 20px 0;
    font-size: 1.8rem;
    font-weight: 700;
    cursor: pointer;
    /* color: hsl(209, 61%, 16%); */
    color: hsl(360, 64%, 55%);

    /* &:hover {
      cursor: pointer;
      transform: scale(1.1);
      transform-origin: 50% 50%;
    } */

    @media (max-width: 500px) {
        font-size: 1.4rem;
    }
`

const Contact = styled(motion.div)`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;    

    .contact-mobile {
        width: 200px;
        display: flex;  
        justify-content: space-around;
        align-items: center; 
        padding: 20px 0; 

        :first-child {            
            color: #000;
        }

        p {            
            color: #000;
            font-weight: 700;
            font-size: 1.1rem;
            padding: 0 20px;
            margin: 0;
        }    
    }
    .social-media {
        width: 100px;
        padding: 20px 0;
        display: flex;
        justify-content: space-around; 

        a {
            color: #000;
        }       
    }
`

export default BurgerMenu;