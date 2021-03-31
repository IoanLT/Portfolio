import React from "react";
import styled from "styled-components";
import BurgerMenu from "./BurgerMenu";
// import { useScroll } from './useScroll';
// import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';


const Burger = ({ openMenu, setOpenMenu, displayMenu, setDisplayMenu }) => {
	// const [navbar, setNavbar] = useState(false);
	// const [element, controls] = useScroll();	

	// This method will toggle the library to show or hide
	const toggleNavHandler = () => {		
		setDisplayMenu(!displayMenu);
		setOpenMenu(!openMenu);
	};
	
	const location = useLocation();
	// console.log(location);

	// This method will change the colour of the burger on scroll
	// const changeBackground = () =>
	// 	window.scrollY >= 727 ? setNavbar(true) : setNavbar(false) || navbar;

	// window.addEventListener("scroll", changeBackground);

    return (
		<>
			<StyledBurger 
				location={location} 
				key={location.key} 
				openMenu={openMenu} 
				onClick={toggleNavHandler}
			>
				<div />
				<div />
				<div />
			</StyledBurger>
			<BurgerMenu 
				openMenu={openMenu} 
				setOpenMenu={setOpenMenu}
				displayMenu={displayMenu} 
				setDisplayMenu={setDisplayMenu} 
			/>	
		</>
        
    )
}

const StyledBurger = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	width: 2rem;
	height: 2rem;
	background: transparent;
	border: none;
	cursor: pointer;
	padding: 0;
	z-index: 11;
	align-items: flex-end;

	&:focus {
		outline: none;
	}

	div {
		width: 2rem;
		height: 0.25rem;
		/* background: ${({ openMenu }) => (openMenu ? "#0D0C1D" : "#EFFFFA")}; */
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;
		

		:first-child {			
			width: ${({ openMenu }) =>	openMenu ? "33px" : "20px"};
			transform: ${({ openMenu }) => openMenu ? "rotate(45deg)" : "rotate(0)"};
			background: ${({ location, openMenu }) => location.pathname !== "/" || openMenu ? "#000" : "#fff"};
			/* background: ${({ openMenu }) => window.scrollY >= 727 || openMenu ? "#000" : "#fff"}; */
		}

		:nth-child(2) {
			width: 30px;
			opacity: ${({ openMenu }) => (openMenu ? "0" : "1")};
			transform: ${({ openMenu }) =>	openMenu ? "translateX(20px)" : "translateX(0)"};
			background: ${({ location, openMenu }) => location.pathname !== "/" || openMenu ? "#000" : "#fff"};
			/* background: ${({ openMenu }) => window.scrollY >= 727 || openMenu ? "#000" : "#fff"}; */
		}

		:nth-child(3) {
			width: ${({ openMenu }) =>	openMenu ? "33px" : "40px"};
			transform: ${({ openMenu }) =>	openMenu ? "rotate(-45deg)" : "rotate(0)"};
			background: ${({ location, openMenu }) => location.pathname !== "/" || openMenu ? "#000" : "#fff"};
			/* background: ${({ openMenu }) => window.scrollY >= 727 || openMenu ? "#000" : "#fff"}; */
		}
	}
`;

export default Burger;