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