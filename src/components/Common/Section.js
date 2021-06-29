import styled from 'styled-components'

export const SectionTitle = styled.p`
    color: var(--text-color-1);
    font-size: 3.38rem;
    position: relative;
    width: max-content;

    @media (max-width: 992px) {
        font-size: 2.8rem;
    }

    @media (max-width: 768px) {
        font-size: 2.2rem;
    }

    @media (max-width: 576px) {
        font-size: 1.8rem;
    }
    

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