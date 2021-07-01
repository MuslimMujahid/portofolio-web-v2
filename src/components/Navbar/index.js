import React, { useState } from 'react'
import { Link } from 'react-scroll'
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

    const handleClickBurgerMenuIcon = () => {
        setShowMobileMenu(!showMobileMenu)
    }

    const handleClickNavLinkMobileItem = () => {
        setShowMobileMenu(false)
    }

    const links = [
        {
            name: 'Home',
            path: 'HeroSection'
        },
        {
            name: 'About',
            path: 'AboutSection'
        },
        {
            name: 'Projects',
            path: 'ProjectsSection'
        },
        {
            name: 'Contact',
            path: 'ContactSection'
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
                            <NavLinksitem>
                                <Link smooth={true} to={l.path}>{l.name}</Link>
                            </NavLinksitem>
                        )
                    }
                    <Button type={1} width="8rem" height="2.6rem">
                        <Link smooth={true} to='ContactSection'>Contact</Link>
                    </Button>     
                </NavLinks>
                <HamburgerMenu onClick={handleClickBurgerMenuIcon}/>
                {
                    showMobileMenu &&
                    <NavLinksMobile>
                    {
                        links.map(l => 
                            <NavLinksItemMobile>
                                <Link to={l.path} onClick={handleClickNavLinkMobileItem}>{l.name}</Link>
                            </NavLinksItemMobile>
                        )
                    }
                    </NavLinksMobile>
                }
            </NavContainer>
        </Nav>
    )
}

export default Navbar
