import styled from 'styled-components'

export const Container = styled.div`
    padding: 4rem var(--page-space);
    background: var(--primary-color-2);
    color: #FFFFFF;
`
export const ContactContainer = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr;

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
        max-width: 500px;

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
    }
`
export const ContactForm = styled.form`
    margin-top: 4rem;
    
    .row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: .8rem;
    }

    & > * {
        margin-bottom: 1.2rem;

        :last-child {
            margin: 0;
        }
    }
`
export const ContactFormTextArea = styled.textarea``