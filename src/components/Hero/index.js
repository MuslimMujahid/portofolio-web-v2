import React from 'react'
import {
    Container,
    Hero__Container,
    Hero__Links,
    Hero__Links__item,
    Hero__Captions
} from './HeroElements'

const Hero = () => {
    return (
        <Container> 
            <Hero__Container>
                <Hero__Links>
                    <Hero__Links__item>Github</Hero__Links__item>
                    <Hero__Links__item>Linkedin</Hero__Links__item>
                    <Hero__Links__item>Email</Hero__Links__item>
                </Hero__Links>
                <Hero__Captions>
                    <div>
                        <p>Muh. Muslim Al Mujahid</p>
                        <p>Web Developer</p>
                        <p>"I feel most alive when i am learning and creating new things..."</p>
                    </div>
                </Hero__Captions>
            </Hero__Container>
        </Container>
    )
}

export default Hero
