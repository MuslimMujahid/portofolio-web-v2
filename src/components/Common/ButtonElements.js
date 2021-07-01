import styled from 'styled-components'

export const Button = styled.button`
    width: ${props => props.width ? props.width:'auto'};
    height: ${props => props.height ? props.height:'auto'};
    display: grid;
    place-items: center;
    align-self: center;
    border-radius: 24px;
    transition: all ease .2s;  
`

export const Button0 = styled(Button)`
    color: var(--text-color-1);
    background: var(--primary-color-3);
    border: solid 2px var(--primary-color-3);

    :hover {
        cursor: pointer;
        background: var(--primary-color-2);
    }
`

export const Button1 = styled(Button)`
    color: var(--text-color-2);
    background: transparent;
    border: solid 2px var(--primary-color-3);

    * {
        color: var(--text-color-2);
    }

    :hover {
        cursor: pointer;
        background: var(--primary-color-3);
        color: var(--text-color-1);

        * {
            color: var(--text-color-1);
        }
    }
`

