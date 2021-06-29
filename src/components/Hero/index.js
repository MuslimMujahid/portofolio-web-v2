import React from 'react'
import {
    Container,
    HeroContainer,
    HeroLinks,
    HeroLinksItem,
    HeroCaptions,
    HeroLinksMobile,
    HeroLinksMobileItem,
    GithubIcon,
    LinkedinIcon
} from './HeroElements'

const Hero = () => {
    return (
        <Container> 
            <HeroContainer>
                <HeroLinks>
                    <HeroLinksItem>Github</HeroLinksItem>
                    <HeroLinksItem>Linkedin</HeroLinksItem>
                    <HeroLinksItem>Email</HeroLinksItem>
                </HeroLinks>
                <HeroCaptions>
                    <div>
                        <p>Muh. Muslim Al Mujahid</p>
                        <p>Web Developer</p>
                        <p>"I feel most alive when i am learning and creating new things..."</p>
                    </div>
                </HeroCaptions>
                <HeroLinksMobile>
                    <HeroLinksMobileItem><GithubIcon/></HeroLinksMobileItem>
                    <HeroLinksMobileItem><LinkedinIcon/></HeroLinksMobileItem>
                </HeroLinksMobile>
            </HeroContainer>
        </Container>
    )
}

export default Hero
