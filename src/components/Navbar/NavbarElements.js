import styled, { keyframes } from 'styled-components'
import { GiHamburgerMenu } from 'react-icons/gi'

const SlideIn = keyframes`
    0% {
        transform: translateY(-100%);
        opacity: 0;
    }
    100% {
        transform: translateY(0%);
        opacity: 1;
    }
`

export const Nav = styled.nav`
    position: sticky;
    top: 0;
    background: var(--primary-color-1);
    color: var(--text-color-1);
    padding: .6rem var(--page-space) 0 var(--page-space);
    z-index: 2;
`

export const NavContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 2.8rem;
`

export const NavLogo = styled.div`
    display: grid;
    place-items: center;
    img {
        width: 3.1875rem;
    }
`

export const NavLinks = styled.ul`
    display: flex;

    & > *:last-child {
        margin-left: 1rem;
    } 

    @media (max-width: 576px) {
        display: none;
    }
`

export const NavLinksitem = styled.li`
    position: relative;
    display: grid;
    place-items: center;
    margin-right: 2rem;
    /* width: 4rem; */
    /* border-bottom: solid 2.4px transparent; */
    transition: all ease .2s;

    ::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        background: var(--primary-color-3);
        width: 0;
        transition: all ease .2s;
    }

    :hover {
        cursor: pointer;
        /* border-bottom: solid 2.4px var(--primary-color-3); */
    
        ::after {
            width: 100%;
        }
    }

`

export const NavLinksMobile = styled.div`
    background: var(--primary-color-1);
    position: absolute;
    top: 100%;
    right: calc(var(--page-space)*-1);
    width: 50%;
    border-radius: 0 0 4px 4px;
    animation: ${SlideIn} .2s ease;
    z-index: 0;
`
export const NavLinksItemMobile = styled.div`
    display: flex;
    align-items: center;
    height: 2.8rem;
    padding: 0 .5rem;
    
    `
export const HamburgerMenu = styled(GiHamburgerMenu)`
    font-size: 1.2rem;

    :hover {
        cursor: pointer;
    }

    @media (min-width: 576px) {
        display: none;
    }
`