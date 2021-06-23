import React from 'react'
import {
    Container,
    About__Container,
    About__Image,
    About__Content
} from './AboutElements'
import {
    Button,
    Section__Title 
} from '../Common'

const About = () => {
    return (
        <Container>
            <About__Container>
                <div>
                    <About__Image>
                        <img src="/profile.jpg" alt="my image" />
                    </About__Image>
                </div>
                <div>
                    <Section__Title> About me </Section__Title>
                    <About__Content>
                        I love to learn and create new things. Solving problem with creative approach and teamwork. passionate in programming. Experienced in working on real team project.
                    </About__Content>
                    <Button type={0} width="12rem" height="3rem">
                        <a href="#" target="__blank">Download Resume</a>
                    </Button>
                </div>
            </About__Container>
        </Container>
    )
}

export default About
