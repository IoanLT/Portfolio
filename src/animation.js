// Animate main pages
export const pageAnimation = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
            when: "beforeChildren", 
            staggerChildren: 0.5
        }
    },
    exit: {
        opacity: 0,
        y: 300,
        transition: {
            duration: 1
        }
    }
};

// Main heading animation
export const titleAnimation = {
    hidden: {  y: 200 },
    show: {
        y: 0,
        transition: { 
            duration: 1,             
            ease: "easeOut"
        }
    }
}

// Text animation on Hero section
export const textFade = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { 
            ease: "easeInOut",
            duration: 1
        }
    }
}

// Text animation on About and skills sections
export const aboutAnimation = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 1,
            ease: 'easeInOut',
            when: "beforeChildren", 
            staggerChildren: 0.25
        }
    }    
};

export const skills = {
    hidden: {
        opacity: 0,
        y: 300
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 1,
            duration: 1,
            ease: 'easeInOut',
            when: "beforeChildren", 
            staggerChildren: 0.25
        }
    }    
};

// Text animation on Skills section
export const skillsAnimation = {
    hidden: {
        opacity: 0,
        x: 300
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {            
            duration: 1,
            ease: 'easeInOut',            
        }
    }    
};


// Photo animation
export const photoAnimation = {
    hidden: { 
        scale: 1.5,
        opacity: 0
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: { 
            ease: "easeInOut",
            duration: 1
         }
    }
}

// Line animation
export const lineAnimation = {
    hidden: { width: '0%' },
    show: { 
        width: '100%',
        transition: { duration: 1 } 
    }    
}

// Frame animations
export const slider = {
    hidden: { 
        x: '-130%', 
        skew: '45deg'
    },
    show: {
        x: '100%',
        skew: '0deg',
        transition: {
            ease: 'easeOut',
            duration: 1
        }
    }
}

// Burger menu animations
export const menuAnimation = {
    hidden: {
        opacity: 0,
        y: 300
        // y: "100%"
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.25,
            ease: 'easeInOut',
            when: "beforeChildren", 
            staggerChildren: 0.25
        }
    },
    exit: {
        opacity: 0,
        y: 300,
        transition: {
            duration: 1
        }
    }
};

export const itemAnimation = {
    hidden: {  y: 300 },
    show: {
        y: 0,
        transition: {            
            duration: 0.4,             
            ease: "easeOut"
        }
    }
};

export const contactAnimation = {
    hidden: {  x: 300 },
    show: {
        x: 0,
        transition: { 
            delay: 1.5,
            duration: 0.4,             
            ease: "easeOut"
        }
    }
};

// Portfolio animation
export const portfolioAnimation = {
    hidden: {
        opacity: 0,         
    },
    show: {
        opacity: 1,        
        transition: {
            delay: 2,
            duration: 3,
            ease: "easeInOut"
        }
    }
}

// Animations for Project section
export const sectionAnimation = {
    hidden: {
        opacity: 0,
        y: 300        
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeInOut',
            when: "beforeChildren", 
            staggerChildren: 0.25
        }
    }
}

export const gridAnimation = {
    hidden: {
        opacity: 0,               
    },
    show: {
        opacity: 1,        
        transition: {  
            delay: 1,          
            duration: 0.5,
            ease: 'easeInOut',
            when: "beforeChildren", 
            staggerChildren: 0.5
        }
    }
}

export const imageAnimation = {
    hidden: {
        opacity: 0, 
        y: 300 
    },
    show: { 
        opacity: 1, 
        y: 0,
        transition: {            
            duration: 1,
            ease: 'easeInOut'
        } 
    }
}

// Project page animations
export const contentAnimation = {
    hidden: {  y: 300 },
    show: {
        y: 0,
        transition: {    
            // delay: 2,         
            duration: 1,             
            ease: "easeOut"
        }
    }
}

export const wrapAnimation = {
    hidden: {
        opacity: 0,        
    },
    show: {
        opacity: 1,        
        transition: {
            duration: 1,
            ease: 'easeInOut',
            when: "beforeChildren", 
            staggerChildren: 0.5
        }
    }
};






