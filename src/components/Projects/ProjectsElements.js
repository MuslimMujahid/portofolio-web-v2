import styled from 'styled-components'

export const Container = styled.div`
    padding: 4rem var(--page-space);
    background: var(--primary-color-1);
    color: #FFFFFF;
`

export const ProjectsContainer = styled.div`

`

export const ProjectsList = styled.div`
    margin-top: 4rem;
`

export const ProjectsListItem = styled.div`
    display: grid;
    grid-template-columns: max-content auto max-content;
    margin-bottom: 1.8rem;
`
export const ProjectImage = styled.div`
    width: 320px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`
export const ProjectInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 .8rem;
`
export const ProjectInfoDesc = styled.p``
export const ProjectInfoStacks = styled.div`
    display: flex;
    `
export const ProjectInfoStacksItem = styled.div`
    background: #AEABCE;
    color: #1D1E2D;
    font-size: .8rem;
    width: max-content;
    padding: .2rem .8rem;
    margin-right: .4rem;
    border-radius: .8rem;
`
export const ProjectLinks = styled.div`

    & > *:first-child {
        margin-bottom: .4rem;
    }
`