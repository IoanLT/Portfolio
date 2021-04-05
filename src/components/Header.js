import React from 'react';
import styled from "styled-components";
import Burger from './Burger';
import { useLocation } from 'react-router-dom';
import BurgerMain from './BurgerMain';

const Header = ({ openMenu, setOpenMenu, displayMenu, setDisplayMenu }) => {

	const location = useLocation();
	console.log(location);

    return (
        <HeaderNav> 
			{
				location.pathname !== "/" 
					? (
						<Burger
							openMenu={openMenu}
							setOpenMenu={setOpenMenu}
							displayMenu={displayMenu}
							setDisplayMenu={setDisplayMenu}				
						/>
					) : (
						<BurgerMain 
							openMenu={openMenu}
							setOpenMenu={setOpenMenu}
							displayMenu={displayMenu}
							setDisplayMenu={setDisplayMenu}
						/>
					)
			}           
			
		</HeaderNav>
    )
}

const HeaderNav = styled.header`
	/* position: absolute; */
	position: fixed;
	top: 0;
	width: 100%;
	padding: 0 40px;
	height: 100px;
	display: flex;
	flex-direction: row;
	/* justify-content: space-between; */
	justify-content: flex-end;
	align-items: center;
    background: transparent;
    z-index: 10;
`;

export default Header;
