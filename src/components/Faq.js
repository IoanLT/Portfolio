import React from 'react';
import styled from 'styled-components';
import { AboutWrapper } from '../styles';
import { AnimateSharedLayout } from 'framer-motion';
import Accordion from './Accordion';

const Faq = () => {
    return (
        <FaqWrapper>            
            <h2>Any questions <span>FAQ</span></h2>

            <AnimateSharedLayout>
                <Accordion title="How do I start?">
                    <div className="question">                    
                        <div className="answer">
                            <p>lorem ipsum dolor sit amet</p>
                            <p>lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</p>
                        </div>                    
                    </div>
                </Accordion>
                <Accordion title="Daily schedule">
                    <div className="question">                   
                        <div className="answer">
                            <p>lorem ipsum dolor sit amet</p>
                            <p>lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</p>
                        </div>                    
                    </div>
                </Accordion>
                <Accordion title="Different payments">
                    <div className="question">                    
                        <div className="answer">
                            <p>lorem ipsum dolor sit amet</p>
                            <p>lorem ipsum dolor sit amet, lorem ipsum dolor sit amet.</p>
                        </div>                    
                    </div>
                </Accordion>  
            </AnimateSharedLayout>          
        </FaqWrapper>
    )
};

const FaqWrapper = styled(AboutWrapper)`
    display: block;    

    span {
        display: block;        
    }

    h2 {
        padding-bottom: 2rem;
        font-weight: lighter;
    }

    .faq-line {
        background: #ccc;
        height: 0.2rem;
        margin: 2rem 0;
        width: 100%;
    }

    .question {
        padding: 3rem 0;
        cursor: pointer;
    }

    .answer {
        padding: 2rem 0;

        p {
            padding: 1rem 0;
        }
    }
`

export default Faq;
