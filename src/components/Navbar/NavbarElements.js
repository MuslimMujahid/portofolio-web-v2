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
        cursor: pointer;
        border-bottom: solid 2.4px var(--primary-color-3);
    }
`