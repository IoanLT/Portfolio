import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    body {
        background: #09070B;                      
    }

    button {
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        margin: 30px 0;
        border: 1px solid hsl(360, 64%, 55%);
        background: transparent;
        outline: none;
        color: #fff;
        transition: all 0.5s ease;        

        &:hover {
            background-color: hsl(360, 64%, 55%);
            color: #fff;
            transform: translateX(10px);
            transition: all 0.3s ease-in-out;
        }

        img {           
            padding-left: 20px; 
        }        
    }

    h1, h2 {
        font-weight: lighter;
        font-size: 3rem;
        font-family: 'Open Sans', sans-serif;        
    }

    h1 {        
        margin-bottom: 30px;        
    }

    h3 {
        font-size: 2.5rem;
        color: #fff;
    }

    h4 {
        font-weight: bold; 
        font-size: 2rem;       
    }

    p {        
        font-size: 1rem;
        /* line-height: 150%; */
        line-height: 2;
        margin-bottom: 20px;

        @media (max-width: 500px) {
            font-size: 14px;                
        }
    }

    /* Styles for the open / hidden navigation menu */
    .open-menu,
    .hidden-menu {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 400px; 
        position: fixed;         
        top: 0;             
        right: 0; 
        height: 100%;    
        overflow: hidden;    
        transition: all 0.7s ease;
        transform: translateX(0);     
        background: #fff;   
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.7), 0 5px 15px rgba(0, 0, 0, 0.1);
        
        @media (max-width: 500px) {        
            width: 100%;
        }
    }

    .hidden-menu {    
        transform: translateX(100%); 
        box-shadow: none;     
    }

`

export default GlobalStyle;