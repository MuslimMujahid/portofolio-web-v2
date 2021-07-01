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
                    <HeroLinksItem>
                        <a target="__blank" href="https://github.com/MuslimMujahid">Github</a>
                    </HeroLinksItem>
                    <HeroLinksItem>
                        <a target="__blank" href="https://www.linkedin.com/in/muslim-mujahid-0638b3138/">Linkedin</a>
                    </HeroLinksItem>
                    {/* <HeroLinksItem>Email</HeroLinksItem> */}
                </HeroLinks>
                <HeroCaptions>
                    <div>
                        <p>Muh. Muslim Al Mujahid</p>
                        <p>Web Developer</p>
                        <p>"I feel most alive when i am learning and creating new things..."</p>
                    </div>
                </HeroCaptions>
                <HeroLinksMobile>
                    <HeroLinksMobileItem>
                        <a target="__blank" href="https://github.com/MuslimMujahid">
                            <GithubIcon/>
                        </a>
                    </HeroLinksMobileItem>
                    <HeroLinksMobileItem>
                        <a target="__blank" href="https://www.linkedin.com/in/muslim-mujahid-0638b3138/">
                            <LinkedinIcon/>
                        </a>
                    </HeroLinksMobileItem>
                </HeroLinksMobile>
            </HeroContainer>
        </Container>
    )
}

export default Hero
