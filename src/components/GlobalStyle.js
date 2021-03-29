import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    body {
        background: #1b1b1b;
        font-family: 'Montserrat', sans-serif;              
    }

    button {
        font-weight: bold;
        font-size: 1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        margin: 30px 0;
        border: 1px solid hsl(360, 64%, 55%);
        background: transparent;
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

            /* &:hover {
                transform: translateX(10px);
                transition: all 0.3s ease-in-out;
            }            */
        }        
    }


    h1, h2 {
        font-weight: lighter;
        font-size: 3rem;
        font-family: 'Open Sans', sans-serif;
        /* color: hsl(238, 94%, 81%); */
    }

    h1 {
        /* font-size: 3rem; */
        margin-bottom: 30px;
        /* color: #fff; */
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
        line-height: 150%;
        margin-bottom: 20px;
    }

    /* span {
        font-weight: bold;
        color: #23d997;
    } */

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