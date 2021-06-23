import styled from 'styled-components'

export const Section__Title = styled.p`
    color: var(--text-color-1);
    font-size: 3.38rem;
    position: relative;
    width: max-content;

    ::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 50%;
        height: 2px;
        background: var(--primary-color-3);
    }
`