import styled from 'styled-components';
import { motion } from 'framer-motion';


export const SectionWrapper = styled(motion.div)`
    height: 100vh;
    display: flex;    
    align-items: center;
    justify-content: space-around;
    padding: 5rem 10rem;
    color: #fff;  
   
`

export const Description = styled.div`
    flex: 1;
    padding-right: 5rem;

    h2 {
        font-weight: lighter;
    }
`

export const Image = styled.div`
    flex: 1;
    overflow: hidden;

    img {
        width: 100%;
        height: 80vh;
        object-fit: cover;
    }
`

export const Hide = styled.div`    
    overflow: hidden; 
/* 
    :first-child {
        margin-bottom: 30px;
    }  */
`