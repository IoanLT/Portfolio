import React, { useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
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

    // This method does the same job as the one above but will also scroll to the top of the page
    const handleHomeMenu = () => {
        setDisplayMenu(false);
        setOpenMenu(false);
        window.scrollTo(0, 0);
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
                        to="/"
                        onClick={handleHomeMenu}        
                    >
                        <ListItem variants={itemAnimation}>Home</ListItem>      
                    </Link>                   

                    <Link                        
                        to="/#about"
                        onClick={handleMenu}
                    >
                        <ListItem variants={itemAnimation}>About</ListItem>
                    </Link>  

                    <Link
                        onClick={handleMenu}
                        to="/#projects"                        
                    >
                        <ListItem variants={itemAnimation}>Projects</ListItem>
                    </Link> 

                    <Link
                        onClick={handleMenu}
                        to="/#contact"                        
                    >
                        <ListItem variants={itemAnimation}>Contact</ListItem>
                    </Link>           
                                     
                </MenuItems>

                <Contact variants={contactAnimation} >
                    <div className="contact-mobile">
                        <FontAwesomeIcon icon={faMobile} size="2x" />
                        <p>+44 7551 454843</p> 
                    </div>
                    <div className="social-media">
                        <a                       
                            href="https://github.com/IoanLT"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a                             
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
    overflow: hidden;    

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
    color: hsl(360, 64%, 55%);

   
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
        width: 250px;
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

            :nth-child(2) {
                color: #0077B5;
            }
        }       
    }
`

export default BurgerMenu;