import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
// import custom hook
import { useScroll } from './useScroll';
// import images
import arrowRight from '../assets/Arrow-right-white.svg';
import musicPlayer from '../assets/music-player-card.PNG';

const Projects = () => {
    const [element, controls] = useScroll();

    return (
        <ProjectsSection id="projects" ref={element}>
            <ProjectHeader>
                <h2>Projects</h2>
            </ProjectHeader> 
            <ProjectGrid>
                <ProjectCard>
                    <img src={musicPlayer} alt="music app" />
                    <h3>Chillhop Music Player</h3>
                    <p>This is a personal project created with React, using hooks, Sass and styled components.</p>                    
                    <button>    
                        <Link to="/our-work">                    
                            Find out more
                            <img src={arrowRight} alt="arrow-right" />             
                        </Link>
                    </button>                    
                </ProjectCard>
            </ProjectGrid>
        </ProjectsSection>
    )
}

const ProjectsSection = styled(motion.section)`
    min-height: 100vh;
    width: 100%;    
    display: flex;   
    align-items: center;
    justify-content: center;    
    padding: 0 5%;
    color: #fff;     

    @media (max-width: 1024px) {
        height: 100%;
    }   
`;

const ProjectHeader = styled(motion.div)`      
    display: flex;
    align-items: center;
    /* overflow: hidden; */
    text-align: left;
    margin: 50px 0;
    border-left: 10px solid hsl(360, 64%, 55%);

    h2 {
        font-size: 3rem;
        color: hsl(360, 64%, 55%);
        padding-left: 10%;
        margin: 0;
    }    
`

const ProjectGrid = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px 10px;
    grid-template-areas:
        ". ."
        ". .";
`

const ProjectCard = styled(motion.div)`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 20px;
    /* background: hsl(360, 100%, 97%); */
    border: 1px solid hsl(360, 64%, 55%);
    border-radius: 10px;

    img {
        /* align-self: center; */
        /* width: 80%; */
        /* height: 300px; */
        object-fit: center;
    }

    h3 {
        /* color: #000; */
        font-size: 2rem;
        padding: 20px 0;
    }

    button {        
        width: 250px;
    }

    a {
        text-decoration: none;
        color: #fff;
    }
`

export default Projects;
