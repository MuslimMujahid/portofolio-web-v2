import React from 'react'
import {
    Nav,
    NavContainer,
    NavLogo,
    NavLinks,
    NavLinksitem
} from './NavbarElements'
import Button from '../Common/Button'

const Navbar = () => {
    return (
        <Nav>
            <NavContainer>
                <NavLogo>
                    <img src="/Logo.png" alt="logo"/>
                </NavLogo>
                <NavLinks>
                    <NavLinksitem>
                        About
                    </NavLinksitem>
                    <NavLinksitem>
                        Skill
                    </NavLinksitem>
                    <NavLinksitem>
                        Projects
                    </NavLinksitem>
                    <Button type={1} width="8rem" height="2.6rem">
                        Contact
                    </Button>     
                </NavLinks>
            </NavContainer>
        </Nav>
    )
}

export default Navbar
