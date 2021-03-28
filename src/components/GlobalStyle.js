import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background: #1b1b1b;
        font-family: 'Montserrat', sans-serif;              
    }

    button {
        font-weight: bold;
        font-size: 1.1.rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid #23d997;
        background: transparent;
        color: #fff;
        transition: all 0.5s ease;

        &:hover {
            background-color: #23d997;
            color: #fff;
        }        
    }


    h1, h2 {
        font-weight: lighter;
        font-size: 4rem;
        font-family: 'Open Sans', sans-serif;
        /* color: hsl(238, 94%, 81%); */
    }

    h1 {
        font-size: 3rem;
        margin-bottom: 30px;
        /* color: #fff; */
    }

    h3 {
        color: #fff;
    }

    h4 {
        font-weight: bold; 
        font-size: 2rem;       
    }

    p {
        font-family: 'Roboto', sans-serif;
        padding: 3rem 0;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    }

    span {
        font-weight: bold;
        color: #23d997;
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
        /* max-height: 100vh;      */
        transition: all 0.7s ease;
        transform: translateX(0);     
        background: #fff;   
        /* background: #f2f4f5; */
        /* background: linear-gradient(to top, hsl(48, 100%, 88%), hsl(44, 92%, 63%));    */

        @media (max-width: 500px) {        
            width: 100%;
        }
    }

    .hidden-menu {    
        transform: translateX(100%);      
    }
    

`

export default GlobalStyle;