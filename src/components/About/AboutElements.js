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
    padding: 0 var(--page-space);

    a {
        color: var(--text-color-2);
        text-decoration: none;
    }
`

export const AboutContainer = styled.div`
    display: grid;

    @media (min-width: 768px) {
        grid-template-columns: 1fr 1fr;
        padding: 8rem 0;
    }

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 4rem 0;
    }
     
    & > div {
        :first-child {
            display: grid;
            place-items: center;
            /* padding: 0 8rem; */
            animation: ${SlideInLeft} 1s ease; 
        }

        :nth-child(2) {
            animation: ${SlideInRight} 1s ease;       
            
            @media (min-width: 768px) {
                padding: 0 0 0 4rem;    
            }
        }
    }
`

export const AboutImage = styled.div`
    position: relative;
    display: grid;
    place-items: center;
    height: 24rem;
    width: 24rem;

    @media (max-width: 1100px) {
        height: 18rem;
        width: 18rem;
    }

    @media (max-width: 768px) {
        margin-bottom: 2rem;
    }

    @media (max-width: 576px) {
        height: 12rem;
        width: 12rem;
    }
    
    img {
        --size: 18rem;

        @media (max-width: 1200px) {
            --size: 16rem;
        }

        @media (max-width: 1100px) {
            --size: 14rem;
        }

        @media (max-width: 576px) {
            --size: 8rem;
        }

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

        @media (max-width: 1200px) {
            width: 16rem;
            height: 16rem;
        }

        @media (max-width: 1100px) {
            width: 12rem;
            height: 12rem;
        }

        @media (max-width: 576px) {
            height: 8rem;
            width: 8rem;
        }
    }

    ::before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 18rem;
        height: 18rem;
        border: solid 2px var(--primary-color-3);

        @media (max-width: 1200px) {
            width: 16rem;
            height: 16rem;
        }

        @media (max-width: 1100px) {
            width: 12rem;
            height: 12rem;
        }

        @media (max-width: 576px) {
            height: 8rem;
            width: 8rem;
        }
    }
`

export const AboutContent = styled.p`
    color: var(--text-color-1);
    margin: 4rem 0;

    @media (max-width: 576px) {
        font-size: 1rem;
        margin: 2rem 0;
    }
`