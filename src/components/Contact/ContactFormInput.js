import React from 'react'
import { Container, Label, Input, TextArea } from './ContactFormInputElements'

const ContactFormInput = ({ label, isTextArea }) => {
    const id = 'ContactFormInput' + label
    
    if (isTextArea) {
        return (
            <Container>
                <Label for={id}>{label}</Label>
                <TextArea id={id}/>
            </Container>
        )
    } else {
        return (
            <Container>
                <Label for={id}>{label}</Label>
                <Input id={id} type="text"/>
            </Container>
        )
    }
}

export default ContactFormInput
