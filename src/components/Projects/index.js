import React from 'react'
import {
    Container,
    ProjectsContainer,
    ProjectsList,
    ProjectsListItem,
    ProjectImage,
    ProjectInfo,
    ProjectInfoDesc,
    ProjectInfoStacks,
    ProjectInfoStacksItem,
    ProjectLinks
} from './ProjectsElements'

import {
    SectionTitle,
    Button
} from '../Common/'

const Projects = () => {

    const projects_data = [
        {
            image: '/projects/navins.jpg',
            desc: 'Website for NAV|INS Co.',
            stacks: ['React', 'Sass'],
            demo: 'https://navinscounsellors.com',
            repo: '#'
        },
        {
            image: '/projects/gleditor.jpg',
            desc: 'Editor built with javascript and webgl. Capable of creating geometry and line, change color, resizing, drag, and save/load.',
            stacks: ['JS', 'Webgl'],
            demo: 'https://muslimmujahid.github.io/cad-clone/',
            repo: 'https://github.com/MuslimMujahid/cad-clone'
        },
        {
            image: '/projects/shibasama.jpg',
            desc: 'Platform to watch anime stored locally. Tracking new episodes and series with API provided by kitsu.io.',
            stacks: ['Vue', 'Tailwind'],
            demo: 'https://muslimmujahid.github.io/shibasama/#/',
            repo: 'https://github.com/MuslimMujahid/shibasama'
        }
    ]

    return (
        <Container>
            <ProjectsContainer>
                <SectionTitle>Projects</SectionTitle>
                <ProjectsList>
                {
                    projects_data.map(p => 
                        <ProjectsListItem>
                            <ProjectImage>
                                <img src={p.image} alt="project" />
                            </ProjectImage>
                            <ProjectInfo>
                                <ProjectInfoDesc>{p.desc}</ProjectInfoDesc>
                                <ProjectInfoStacks>
                                    {
                                        p.stacks.map(s =>
                                            <ProjectInfoStacksItem>{s}</ProjectInfoStacksItem>
                                        )
                                    }
                                </ProjectInfoStacks>
                            </ProjectInfo>
                            <ProjectLinks>
                                <Button width="8rem" height="2.8rem" type={1}>
                                    <a target='__blank' href={p.demo}>Live Demo</a>
                                </Button>
                                <Button width="8rem" height="2.8rem" type={1}>
                                    <a target='__blank' href={p.repo}>Repository</a>
                                </Button>
                            </ProjectLinks>
                        </ProjectsListItem>
                    )
                }
                </ProjectsList>
            </ProjectsContainer>
        </Container>
    )
}

export default Projects
