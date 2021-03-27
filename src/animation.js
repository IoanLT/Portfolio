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
            duration: 0.75,             
            ease: "easeOut"
        }
    }
}

// Text animation
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

// Burger menu anuimations
export const menuAnimation = {
    hidden: {
        opacity: 0,
        y: 300
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
    hidden: {  x: 300 },
    show: {
        x: 0,
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






