import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Accordion = ({ children, title }) => {
    const [accordion, setAccordion] = useState(false);

    return (
        
            <motion.div 
                layout
                className="question" 
                onClick={() => setAccordion(!accordion)}
            >
                <motion.h4 layout>{title}</motion.h4>
                {/* {accordion ? children : ""} */}
                {accordion && children }
                <div className="faq-line"></div>
            </motion.div>
        
    )
}

export default Accordion;
