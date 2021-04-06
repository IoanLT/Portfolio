import React from "react";
import styled from "styled-components";
import ScrollMenu from "./ScrollMenu";


const BurgerMain = ({ openMenu, setOpenMenu, displayMenu, setDisplayMenu }) => {
	
	// This method will toggle the menu to show or hide
	const toggleNavHandler = () => {		
		setDisplayMenu(!displayMenu);
		setOpenMenu(!openMenu);
	};
	
    return (
		<>
			<StyledBurger 				
				openMenu={openMenu} 
				onClick={toggleNavHandler}
			>
				<div />
				<div />
				<div />
			</StyledBurger>
			<ScrollMenu 
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
		border-radius: 10px;
		transition: all 0.3s linear;
		position: relative;
		transform-origin: 1px;
		

		:first-child {			
			width: ${({ openMenu }) =>	openMenu ? "33px" : "20px"};
			transform: ${({ openMenu }) => openMenu ? "rotate(45deg)" : "rotate(0)"};
			background: ${({ openMenu }) => openMenu ? "#000" : "#fff"};			
		}

		:nth-child(2) {
			width: 30px;
			opacity: ${({ openMenu }) => (openMenu ? "0" : "1")};
			transform: ${({ openMenu }) =>	openMenu ? "translateX(20px)" : "translateX(0)"};
			background: ${({ openMenu }) => openMenu ? "#000" : "#fff"};			
		}

		:nth-child(3) {
			width: ${({ openMenu }) =>	openMenu ? "33px" : "40px"};
			transform: ${({ openMenu }) =>	openMenu ? "rotate(-45deg)" : "rotate(0)"};
			background: ${({ openMenu }) => openMenu ? "#000" : "#fff"};			
		}
	}
`;

export default BurgerMain;