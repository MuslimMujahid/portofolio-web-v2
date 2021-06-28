import React, { useState } from 'react'
import {
    Nav,
    NavContainer,
    NavLogo,
    NavLinks,
    NavLinksitem,
    NavLinksMobile,
    NavLinksItemMobile,
    HamburgerMenu
} from './NavbarElements'
import Button from '../Common/Button'

const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const links = [
        {
            name: 'About',
            path: '#'
        },
        {
            name: 'Projects',
            path: '#'
        },
        {
            name: 'Contact',
            path: '#'
        }
    ]

    return (
        <Nav>
            <NavContainer>
                <NavLogo>
                    <img src="/Logo.png" alt="logo"/>
                </NavLogo>
                <NavLinks>
                    {
                        links.map(l => 
                            l.name !== 'Contact' &&
                            <NavLinksitem>{l.name}</NavLinksitem>
                        )
                    }
                    <Button type={1} width="8rem" height="2.6rem">
                        Contact
                    </Button>     
                </NavLinks>
                <HamburgerMenu onClick={() => setShowMobileMenu(!showMobileMenu)}/>
                {
                    showMobileMenu &&
                    <NavLinksMobile>
                    {
                        links.map(l => <NavLinksItemMobile to={l.path}>{l.name}</NavLinksItemMobile>)
                    }
                    </NavLinksMobile>
                }
            </NavContainer>
        </Nav>
    )
}

export default Navbar
