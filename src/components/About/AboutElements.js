import styled, { keyframes } from 'styled-components'

const SlideInLeft = keyframes`
    0% { 
        transform: translateX(-50%); 
        opacity: 0;
    }
    100% { 
        transform: translateX(0); 
        opacity: 1;
    }
`

const SlideInRight = keyframes`
    0% { 
        transform: translateX(50%); 
        opacity: 0;
    }
    100% { 
        transform: translateX(0); 
        opacity: 1;
    }
`

export const Container = styled.div`
    background: var(--primary-color-2);

    a {
        color: var(--text-color-2);
        text-decoration: none;
    }
`

export const AboutContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 8rem 0;
    
    & > div {
        :first-child {
            padding: 0 8rem;
            animation: ${SlideInLeft} 1s ease; 
        }

        :nth-child(2) {
            padding: 0 4rem;     
            animation: ${SlideInRight} 1s ease;       
        }
    }
`

export const AboutImage = styled.div`
    position: relative;
    display: grid;
    place-items: center;
    height: 100%;
    min-height: 24rem;
    
    img {
        --size: 18rem;
        width: var(--size);
        height: var(--size);
        object-fit: cover;
        border-radius: 50%;
        object-position: top;
        z-index: 2;
    }
    
    ::after {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        width: 18rem;
        height: 18rem;
        border: solid 2px var(--primary-color-3);
    }

    ::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 18rem;
        height: 18rem;
        border: solid 2px var(--primary-color-3);
    }
`

export const AboutContent = styled.p`
    color: var(--text-color-1);
    margin: 4rem 0;
`