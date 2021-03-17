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

    h2 {
        font-weight: lighter;
        font-size: 4rem;
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
`

export default GlobalStyle;