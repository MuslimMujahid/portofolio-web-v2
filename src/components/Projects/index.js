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
} from '../Common/Section'

const Projects = () => {

    const projects_data = [
        {
            image: '#',
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
