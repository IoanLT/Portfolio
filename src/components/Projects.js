import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
// import custom hook
import { useScroll } from './useScroll';
// import images
import musicPlayer from '../assets/music-player-card.PNG';
import jobPortal from '../assets/job-portal-card.PNG';
import authxrs from '../assets/authxrs-card.PNG';
import janine from '../assets/janine-card.PNG';
// import animations
import { menuAnimation } from '../animation';

const Projects = () => {
    const [element, controls] = useScroll();

    return (
        <ProjectsSection 
            id="projects"
            ref={element}            
            variants={menuAnimation}
            animate={controls}
            initial="hidden"
        >
            <ProjectHeader>
                <h2>Projects</h2>
            </ProjectHeader> 
            <p>
                Here is a selection of projects that I have worked on while studying web development at Wild Code School.
            </p>
            <p>
                Some of these include group projects and some of them are personal projects that I have worked on after completing the bootcamp.
            </p>
            <ProjectGrid>
                <ProjectCard>
                    <Link
                        to="/music-player"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <img src={musicPlayer} alt="music app" />
                    </Link>
                    {/* <h3>Music Player</h3>
                    <p>
                        This is a personal project I really enjoyed working on.
                        For this project I used React hooks, Sass and styled components.
                    </p>   
                    
                    <button>    
                        <Link 
                            to="/music-player"
                            onClick={() => window.scrollTo(0, 0)}
                        >                    
                            Find out more
                            <img src={arrowRight} alt="arrow-right" />             
                        </Link>
                    </button>                     */}
                </ProjectCard>

                <ProjectCard>
                    <Link
                        to="/music-player"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <img src={authxrs} alt="authors app" />
                    </Link>
                    
                    {/* <h3>Authxrs</h3>
                    <p>Authors is a socially aware and sustainable publishing house supporting suppressed voices worldwide.</p>                    
                    <button>    
                        <Link 
                            to="/music-player"
                            onClick={() => window.scrollTo(0, 0)}
                        >                    
                            Find out more
                            <img src={arrowRight} alt="arrow-right" />             
                        </Link>
                    </button>                     */}
                </ProjectCard>

                <ProjectCard>
                    <Link
                        to="/music-player"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <img src={jobPortal} alt="job portal app" />
                    </Link>
                    
                    {/* <h3>Job portal</h3>
                    <p>This was a group project created during the coding bootcamp. 
                        Our task was to create a fully functional React app by using API calls.
                    </p>                    
                    <button>    
                        <Link 
                            to="/music-player"
                            onClick={() => window.scrollTo(0, 0)}
                        >                    
                            Find out more
                            <img src={arrowRight} alt="arrow-right" />             
                        </Link>
                    </button>                     */}
                </ProjectCard>

                <ProjectCard>
                    <Link
                        to="/music-player"
                        onClick={() => window.scrollTo(0, 0)}
                    >
                        <img src={janine} alt="janine" />
                    </Link>
                    
                    {/* <h3>Instabeauty</h3>
                    <p>
                        Creation of a brand new website for Instabeauty Studio to inform 
                        potential clients of the services offered in the studio.
                    </p>                    
                    <button>    
                        <Link 
                            to="/music-player"
                            onClick={() => window.scrollTo(0, 0)}
                        >                    
                            Find out more
                            <img src={arrowRight} alt="arrow-right" />             
                        </Link>
                    </button>                     */}
                </ProjectCard>
            </ProjectGrid>
        </ProjectsSection>
    )
}

const ProjectsSection = styled(motion.section)`
    min-height: 100vh;
    width: 100%;    
    display: flex;
    flex-direction: column;    
    justify-content: center;    
    padding: 0 5%;
    color: #fff; 
    margin-bottom: 100px; 

    @media (max-width: 1024px) {
        height: 100%;
        padding: 0 18%;
    }   
    @media (max-width: 768px) {        
        padding: 0 10%;
    }  
    
`;

const ProjectHeader = styled(motion.div)` 
    width: 100%;
    overflow: hidden;
    text-align: left;
    margin: 50px 0;
    border-left: 10px solid hsl(360, 64%, 55%);    

    h2 {
        font-size: 3rem;
        color: hsl(360, 64%, 55%);
        padding-left: 5%;
        margin: 0;

        @media (max-width: 1024px) {
            padding-left: 10%;
        }
    }    
`

const ProjectGrid = styled(motion.div)`
    display: grid;    
    overflow: hidden;     
    grid-template-columns: 1fr 1fr;    
    grid-template-rows: 46% 46%;    
    gap: 30px 30px;
    grid-auto-flow: dense;
    margin-top: 50px;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-template-rows: 0.95fr 0.95fr 0.95fr 0.95fr;
    }
`

const ProjectCard = styled(motion.div)`    
    overflow: hidden;    
    border: 1px solid #fff;        

    img {                     
        width: 100%;        
        object-fit: cover;        
        transition: transform 2s; 
        opacity: 0.8;       

        &:hover {
            cursor: pointer;
            transform: scale(1.03);
            transform-origin: 50% 50%;
            opacity: 1;
        }
    }   
`

export default Projects;
