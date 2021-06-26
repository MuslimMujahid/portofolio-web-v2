import styled from 'styled-components'

export const Container = styled.div`
    padding: 4rem var(--page-space);
    background: var(--primary-color-1);
    color: #FFFFFF;
`

export const HeroContainer = styled.div`
    height: 32rem;
    display: flex;
`

export const HeroLinks = styled.div`
    width: 6rem;
    height: 8rem;
    border-right: solid 2px var(--primary-color-3);
    /* margin-right: 8rem; */
`

export const HeroLinksItem = styled.div``

export const HeroCaptions = styled.div`
    position: relative;
    display: grid;
    place-items: center;
    flex-grow: 1;

    & > div {
        width: max-content;
    }
    
    p:first-child {
        font-size: 3.38rem;
        line-height: .8;
    }

    p:nth-child(2) {
        font-size: 1.8rem;
        color: var(--text-color-2);
        margin-bottom: 4rem;
    } 

    ::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        width: 8rem;
        height: 8rem;
        border-right: solid 2px var(--primary-color-3);
        border-bottom: solid 2px var(--primary-color-3);
    }
`
