import React from 'react';
import styled from "styled-components";
import Burger from './Burger';

const Header = ({ openMenu, setOpenMenu, displayMenu, setDisplayMenu }) => {
    return (
        <HeaderNav>	
            
			<Burger
				openMenu={openMenu}
				setOpenMenu={setOpenMenu}
                displayMenu={displayMenu}
                setDisplayMenu={setDisplayMenu}				
			/>
		</HeaderNav>
    )
}

const HeaderNav = styled.nav`
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
