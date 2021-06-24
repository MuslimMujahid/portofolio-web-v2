import styled from 'styled-components'

export const Nav = styled.nav`
    position: sticky;
    top: 0;
    background: var(--primary-color-1);
    color: var(--text-color-1);
    padding: .6rem var(--page-space) 0 var(--page-space);
    z-index: 2;
`

export const Nav__Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 2.8rem;
`

export const Nav__Logo = styled.div`
    display: grid;
    place-items: center;
    img {
        width: 3.1875rem;
    }
`

export const Nav__Links = styled.ul`
    display: flex;

    & > *:last-child {
        margin-left: 1rem;
    } 
`

export const Nav__Links__item = styled.li`
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