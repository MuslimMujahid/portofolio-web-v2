import React from 'react'
import {
    Container,
    AboutContainer,
    AboutImage,
    AboutContent
} from './AboutElements'
import {
    Button,
    SectionTitle 
} from '../Common'

const About = () => {
    return (
        <Container>
            <AboutContainer>
                <div>
                    <AboutImage>
                        <img src="/profile.jpg" alt="my image" />
                    </AboutImage>
                </div>
                <div>
                    <SectionTitle> About me </SectionTitle>
                    <AboutContent>
                        I love to learn and create new things. Solving problem with creative approach and teamwork. passionate in programming. Experienced in working on real team project.
                    </AboutContent>
                    <Button type={1} width="12rem" height="3rem">
                        <a href="#" target="_blank">Download Resume</a>
                    </Button>
                </div>
            </AboutContainer>
        </Container>
    )
}

export default About
