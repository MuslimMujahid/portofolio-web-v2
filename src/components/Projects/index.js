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
            image: '/projects/shibasama.jpg',
            desc: 'Platform to watch anime stored locally. Tracking new episodes and series with API provided by kitsu.io.',
            stacks: ['Vue', 'Tailwind']
        },
        {
            image: '/projects/shibasama.jpg',
            desc: 'Platform to watch anime stored locally. Tracking new episodes and series with API provided by kitsu.io.',
            stacks: ['Vue', 'Tailwind']
        },
        {
            image: '/projects/shibasama.jpg',
            desc: 'Platform to watch anime stored locally. Tracking new episodes and series with API provided by kitsu.io.',
            stacks: ['Vue', 'Tailwind']
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
                                <Button width="8rem" height="2.8rem" type={1}>Live Demo</Button>
                                <Button width="8rem" height="2.8rem" type={1}>Repository</Button>
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
