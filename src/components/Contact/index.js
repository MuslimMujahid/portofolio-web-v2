import React from 'react'
import {
    Container,
    ContactContainer,
    ContactForm, 
    // ContactFormTextArea, 
} from './ContactElements'

import ContactFormInput from './ContactFormInput'

import {
    SectionTitle,
    Button
} from '../Common'

const Contact = () => {
    return (
        <Container>
            <ContactContainer>
                <div>
                    <SectionTitle>Contact</SectionTitle>
                    <ContactForm>
                        <div className="row">
                            <ContactFormInput label="FIRST NAME"/>
                            <ContactFormInput label="LAST NAME"/>
                        </div>
                        <ContactFormInput label="EMAIL"/>
                        <ContactFormInput label="MESSAGE" isTextArea={true}/>
                        <Button type={1} width="8rem" height="2.8rem">SEND</Button>
                    </ContactForm>
                </div>
                <div>
                    <div className="box"></div>
                </div>
            </ContactContainer>
        </Container>
    )
}

export default Contact
