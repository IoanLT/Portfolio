import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar>
            <h1><Link id="logo" to="/">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">About Us</Link>
                </li>
                <li>
                    <Link to="/our-work">Our Work</Link>
                </li>
                <li>
                    <Link to="/contact-us">Contact Us</Link>
                </li>
            </ul>
        </Navbar>
    )
}

const Navbar = styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background: #282828;

    a {
        color: #fff;
        text-decoration: none;        
    }

    ul {
        display: flex; 
        list-style: none;
    }

    li {
        padding-left: 10rem;
        position: relative;
    }

    #logo {
        font-size: 1.5rem;
        font-family: "Lobster", cursive;
        font-weight: lighter;
    }
`

export default Header;
