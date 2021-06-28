import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`

export const Label = styled.label.attrs(props => ({
    for: props.for
}))`
    /* font-size: .8rem; */
    color: var(--text-color-2); 
`

export const Input = styled.input.attrs(props => ({
    onChange: props.onChange
}))`
    background: #AEABCE;
    height: 2.4rem;
    border-radius: 4px;
    outline: none;
    padding: 0 .6rem;
`

export const TextArea = styled.textarea.attrs(props => ({
    onChange: props.onChange
}))`
    background: #AEABCE;
    height: 8rem;
    border-radius: 4px;
    outline: none;
    padding: .4rem .6rem;
    resize: none;
`