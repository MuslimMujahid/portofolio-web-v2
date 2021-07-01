import styled from 'styled-components'

export const Container = styled.div`
    padding: 4rem var(--page-space);
    background: var(--primary-color-2);
    color: #FFFFFF;
`
export const ContactContainer = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
    }

    & > *:first-child {
        margin-right: 4rem;    
    }

    & > *:last-child {
        display: grid;
        place-items: center;
        padding: 4rem 0;
    }

    .box {
        position: relative;
        width: 100%;
        height: 100%;
        max-width: 350px;
        max-height: 350px;

        ::after {
            content: '';
            position: absolute;
            right: 0;
            bottom: 0;
            width: 14rem;
            height: 14rem;
            border: solid 2px var(--primary-color-3);
        }

        ::before {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            width: 14rem;
            height: 14rem;
            border: solid 2px var(--primary-color-3);
        }

        @media (max-width: 768px) {
            display: none;
        }
    }
`
export const ContactForm = styled.form`
    margin-top: 4rem;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        max-width: 28rem;
        width: 100%;
        & > * {
            width: 100%;
        }
    }
    
    .row {
        display: flex;
        gap: .5rem;

        & > * {
            width: 100%;
        }

        @media (max-width: 768px) {
            flex-direction: column;
            gap: 1.2rem;
        }
    }

    & > * {
        margin-bottom: 1.2rem;

        :last-child {
            margin: 0;
        }
    }
`
export const ContactFormTextArea = styled.textarea``