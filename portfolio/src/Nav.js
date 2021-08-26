import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function Nav(){

    const [clicked, setClicked] = useState(false);
    const handleClick = () => {
        setClicked(!clicked);
    }

    return(
        <Container>
            <Name>Serge Metellus</Name>
            <Toggler onClick={handleClick}>
                { clicked ? <CloseIcon/> : <MenuIcon/>}
            </Toggler>
            <Collapse>
                <NavList style={{opacity: clicked ? 1 : 0}}>
                    <NavItem>
                        <NavLink>
                            Home
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink >
                            About
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            Work
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>
                            Contact
                        </NavLink>
                    </NavItem>
                </NavList>
            </Collapse>
        </Container>
    )
}
export default Nav;
const Container = styled.nav`
    background-color: rgba(0, 0, 0, 0);
    position: fixed; 
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
    @media(min-width : 992px){
        // display: none;
        flex-wrap: nowrap;
        justify-content: flex-start;
        text-align: left;

    }
`
const Name = styled.h4`
    color: white;
    margin-left: 10px;
    @media(min-width : 992px){
        width : 100%;

    }
`
    


const Toggler = styled.button`
    cursor: pointer;
    margin-right: 10px;
    @media(min-width : 992px){
        display: none;
    }
`
const TogglerIcon = styled.span`
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
`
const Collapse = styled.div`
    width: 100%;
    align-items: center;
`
const NavList = styled.ul`
    display: flex;    
    flex-direction: column;
    padding: 0;
    list-style: none;
    @media(min-width : 992px){
        flex-direction: row;
        justify-content: flex-end;
    }
`
const NavItem = styled.li`
    margin: 0 10px;
`
const NavLink = styled.a`
    color: white;
`