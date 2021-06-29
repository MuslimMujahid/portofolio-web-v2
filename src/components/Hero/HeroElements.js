import styled, { keyframes } from 'styled-components'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'

const BouncingLeft = keyframes`
    0% { transform: translateX(0); }
    12% { transform: translateX(-10px); }
    25% { transform: translateX(0); }
    100% { transform: translateX(0); }
`

const GrowHeight = keyframes`
    0% { height: 0; }
    100% { height: 8rem; }
`

const GrowWidthHeight = keyframes`
    0% { 
        width: 0;
        height: 0; 
    }
    100% { 
        width: 8rem;
        height: 8rem; 
    }
`

const GrowWidthHeightMobile = keyframes`
    0% { 
        width: 0;
        height: 0; 
    }
    100% { 
        width: 4rem;
        height: 4rem; 
    }
`

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    50% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

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
    animation: ${GrowHeight} 1s ease;

    @media (max-width: 576px) {
        display: none;
    }
`

export const HeroLinksItem = styled.div`
    
    :nth-of-type(1) {
        animation: ${fadeIn} 2s ease, ${BouncingLeft} 4s 2s ease-in-out infinite;
    }

    :nth-of-type(2) {
        animation: ${fadeIn} 2s ease, ${BouncingLeft} 4s 4s ease-in-out infinite;
    }

    ::after {
        content: '';
        position: absolute;
        left: -10px;
        height: 0;
        width: 2px;
        background: var(--primary-color-1);
        transition: all .2s ease;
    }

    :hover {
        cursor: pointer;
        animation-play-state: paused;

        ::after {
            background: var(--primary-color-3);
            height: 100%;
        }
    }
`

export const HeroCaptions = styled.div`
    position: relative;
    display: grid;
    place-items: center;
    flex-grow: 1;
    /* background: red; */

    @media (max-width: 576px) {
        text-align: center;
    }

    p {
        animation: ${fadeIn} 2s ease;
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
        animation: ${GrowWidthHeight} 1s ease;

        @media (max-width: 576px) {
            width: 4rem;
            height: 4rem;
            animation: ${GrowWidthHeightMobile} 1s ease;
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
        animation: ${GrowWidthHeightMobile} 1s ease;

        @media (min-width: 576px) {
            display: none;
        }
    }
`

export const HeroLinksMobile = styled.div`

    animation: ${fadeIn} 2s ease;
    
    @media (min-width: 576px) {
        display: none;
    }
`
export const HeroLinksMobileItem = styled.div`
    position: relative;
    margin-bottom: .5rem;

    :nth-of-type(1) {
        animation: ${BouncingLeft} 4s ease-in-out infinite;
    }

    :nth-of-type(2) {
        animation: ${BouncingLeft} 4s 2s ease-in-out infinite;
    }

    ::after {
        content: '';
        position: absolute;
        left: -10px;
        height: 0;
        width: 2px;
        background: var(--primary-color-1);
        transition: all .2s ease;
    }

    :hover {
        cursor: pointer;
        animation-play-state: paused;

        ::after {
            background: var(--primary-color-3);
            height: 100%;
        }
    }
`
export const GithubIcon = styled(AiFillGithub)`
    font-size: 1.8rem;
`
export const LinkedinIcon = styled(AiFillLinkedin)`
    font-size: 1.8rem;
`