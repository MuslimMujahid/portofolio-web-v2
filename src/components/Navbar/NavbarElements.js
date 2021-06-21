import styled from 'styled-components'

export const Nav = styled.nav`
    position: sticky;
    top: 0;
    background: var(--primary-color-1);
    color: var(--text-color-1);
    padding: .6rem var(--page-space) 0 var(--page-space);
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
`

export const Nav__Links__item = styled.li`
    display: grid;
    place-items: center;
    margin-right: var(--item-space);
    width: 4rem;
    border-bottom: solid 2.4px transparent;
    transition: all ease .2s;

    :hover {
        font-size: 1.2rem;
        width: 6rem;
        cursor: pointer;
        border-bottom: solid 2.4px var(--primary-color-3);
    }
`

export const Nav__Links__item__contact = styled.li`
    background: var(--primary-color-3);
    border: solid 2px var(--primary-color-3);
    width: 8rem;
    height: 2.6rem;   
    display: grid;
    place-items: center;
    align-self: center;
    border-radius: 24px;
    transition: all ease .2s;
    
    :hover {
        width: 10rem;
        margin-left: 2rem;
        cursor: pointer;
        background: var(--primary-color-2);
    }
`