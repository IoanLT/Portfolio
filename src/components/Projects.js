import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import styled from 'styled-components';
// import custom hook
import { useScroll } from './useScroll';
// import images
import arrowRight from '../assets/Arrow-right-white.svg';
import musicPlayer from '../assets/music-player-card.PNG';
import jobPortal from '../assets/job-portal-card.PNG';
import authxrs from '../assets/authxrs-card.PNG';
import janine from '../assets/janine-card.PNG';

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
                    <h3>Music Player</h3>
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
                    </button>                    
                </ProjectCard>

                <ProjectCard>
                    <img src={authxrs} alt="authors app" />
                    <h3>Authxrs</h3>
                    <p>Authors is a socially aware and sustainable publishing house supporting suppressed voices worldwide.</p>                    
                    <button>    
                        <Link 
                            to="/music-player"
                            onClick={() => window.scrollTo(0, 0)}
                        >                    
                            Find out more
                            <img src={arrowRight} alt="arrow-right" />             
                        </Link>
                    </button>                    
                </ProjectCard>

                <ProjectCard>
                    <img src={jobPortal} alt="job portal app" />
                    <h3>Job portal</h3>
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
                    </button>                    
                </ProjectCard>

                <ProjectCard>
                    <img src={janine} alt="janine" />
                    <h3>Instabeauty</h3>
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
    flex-direction: column;   
    /* align-items: center; */
    justify-content: center;    
    padding: 0 15%;
    color: #fff;     

    @media (max-width: 1024px) {
        height: 100%;
    }   
`;

const ProjectHeader = styled(motion.div)` 
    width: 50%;
    overflow: hidden;
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
    align-items: center;
    /* grid-template-columns: repeat(auto-fit, minmax(300px, 2fr)); */
    /* grid-template-rows: repeat(auto-fit, minmax(300px, 2fr)); */
    overflow: hidden;    
    /* padding: 0 10%; */
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 20px 20px;
    grid-auto-flow: dense;
    /* grid-template-areas:
        ". ."
        ". ."; */

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
    }
`

const ProjectCard = styled(motion.div)`
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 20px;
    /* background: hsl(360, 100%, 97%); */
    /* border: 1px solid hsl(360, 64%, 55%); */
    border-radius: 10px;
    max-width: 450px;
    align-self: center;
    justify-self: center;
    /* height: 800px; */

    img {
        /* align-self: center; */
        width: 100%;
        height: 300px;
        object-fit: cover;
        /* border: 1px solid #fff; */
    }

    h3 {
        /* color: #000; */
        font-size: 2rem;
        padding: 20px 0;
    }

    button {        
        width: 250px;

        img {
            width: auto;
            height: auto;
            /* border: none; */
        }
    }

    a {
        text-decoration: none;
        color: #fff;
    }
`

export default Projects;
