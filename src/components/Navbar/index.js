import React from 'react'
import {
    Nav,
    Nav__Container,
    Nav__Logo,
    Nav__Links,
    Nav__Links__item,
    Nav__Links__item__contact
} from './NavbarElements'

const Navbar = () => {
    return (
        <Nav>
            <Nav__Container>
                <Nav__Logo>
                    <img src="/Logo.png" alt="logo"/>
                </Nav__Logo>
                <Nav__Links>
                    <Nav__Links__item>
                        About
                    </Nav__Links__item>
                    <Nav__Links__item>
                        Skill
                    </Nav__Links__item>
                    <Nav__Links__item>
                        Projects
                    </Nav__Links__item>
                    <Nav__Links__item__contact>
                        Contact
                    </Nav__Links__item__contact>      
                </Nav__Links>
            </Nav__Container>
        </Nav>
    )
}

export default Navbar
