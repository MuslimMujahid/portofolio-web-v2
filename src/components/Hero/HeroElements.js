import styled from 'styled-components'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

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

    @media (max-width: 576px) {
        display: none;
    }
`

export const HeroLinksItem = styled.div``

export const HeroCaptions = styled.div`
    position: relative;
    display: grid;
    place-items: center;
    flex-grow: 1;
    /* background: red; */

    @media (max-width: 576px) {
        text-align: center;
    }
    
    p:first-child {
        font-size: 3.38rem;
        line-height: .8;

        @media (max-width: 992px) {
            font-size: 2.8rem;
        }

        @media (max-width: 768px) {
            font-size: 2.2rem;
        }

        @media (max-width: 576px) {
            font-size: 1.8rem;
        }
    }

    p:nth-child(2) {
        font-size: 1.8rem;
        color: var(--text-color-2);
        margin-bottom: 4rem;
    
        @media (max-width: 768px) {
            font-size: 1.6rem;
        }

        @media (max-width: 576px) {
            font-size: 1.38rem;
        }
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

        @media (max-width: 576px) {
            width: 4rem;
            height: 4rem;
        }
    }

    ::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 4rem;
        height: 4rem;
        border-left: solid 2px var(--primary-color-3);
        border-top: solid 2px var(--primary-color-3);

        @media (min-width: 576px) {
            display: none;
        }
    }
`

export const HeroLinksMobile = styled.div`
    @media (min-width: 576px) {
        display: none;
    }
`
export const HeroLinksMobileItem = styled.div`
    margin-bottom: .5rem;
`
export const GithubIcon = styled(AiFillGithub)`
    font-size: 1.8rem;
`
export const LinkedinIcon = styled(AiFillLinkedin)`
    font-size: 1.8rem;
`