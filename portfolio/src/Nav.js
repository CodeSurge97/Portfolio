import React, { useEffect, useState } from "react";
import styled from 'styled-components'

function Nav(){



    return(
        <Container>
            <Name>Serge Metellus</Name>
            <Toggler>
                <TogglerIcon></TogglerIcon>
            </Toggler>
            <Collapse>
                <NavList>
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
    justify-content: flex-start;
    align-items: center;
    flex-wrap: nowrap;
    top: 0;
    right: 0;
    left: 0;
    z-index: 1030;
`
const Name = styled.div`
    color: white;
    width: 100%
`

const Toggler = styled.button`

`
const TogglerIcon = styled.span`
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.55%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
`
const Collapse = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 100%;
    align-items: center;
`
const NavList = styled.ul`
    display: flex;    
    flex-direction: row;
    list-style: none;
`
const NavItem = styled.li`
    margin: 0 10px;
`
const NavLink = styled.a`
    color: white;
`