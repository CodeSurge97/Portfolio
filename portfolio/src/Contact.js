import React, {useState} from 'react';
import styled from 'styled-components';
import axios from 'axios';

function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    
    
    const onNameChange = (event) => {
        const {name, value} = event.currentTarget;
        if(name === 'firstName'){
            setFirstName(value)
        }
        else
            setLastName(value);
        
    }
    
    const onEmailChange = (event) => {
        setEmail(event.target.value)
    }
    
    const onMessageChange = (event) => {
        setMessage(event.target.value)
    }
    
   const handleSubmit = ( event ) => {
        event.preventDefault();
        const data = {
            name: firstName + ' ' + lastName,
            email: email,
            message: message
        }
        
        
        axios.post("http://localhost:5000/send", data)
            
            .then(res => {
                if (res.data.status === 'success') {
                    alert("Message Sent.");
                  } 
                else if (res.data.status === 'fail') {
                    alert("Message failed to send.")    
                }
            });
    }

    return (
        <Section>
            <Container>
                <Header>
                    <Text>
                        Get In Touch
                    </Text>
                </Header>
                <Form onSubmit={handleSubmit}>
                    <FullName>
                        <Name >
                            <Input placeholder={'First Name'} name={'firstName'} value={firstName} onChange={onNameChange}/>
                        </Name>
                        <Name>
                            <Input placeholder={'Last Name'} name={'lastName'} value={lastName} onChange={onNameChange}/>
                        </Name>
                    </FullName>
                    <Email>
                        <Input placeholder={'Email'} value={email} onChange={onEmailChange}/>
                    </Email>
                    <Message>
                        <Textarea placeholder={'Message'} value={message} onChange={onMessageChange}></Textarea>
                    </Message>
                    <Button>
                        Submit
                    </Button>
                </Form>
            </Container>
        </Section>
        
    )
}

export default Contact;

const Section = styled.section`
    background-color: rgb(47, 47, 47);
    color: white;
`

const Container = styled.div`
    border-radius: 5px;
    padding: 20px;
    max-width: 1320px;
    margin-right: auto;
    margin-left: auto;
    width: 100%;
`
const Header = styled.div`

`
const Text = styled.h2`

`
const Form = styled.form`
    @media (min-width: 1400px){
        padding: 60px 200px;
    }
`
const FullName = styled.div`
    --bs-gutter-x: 1.5rem;
    --bs-gutter-y: 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(var(--bs-gutter-y) * -1);
    margin-right: calc(var(--bs-gutter-x)/ -2);
    margin-left: calc(var(--bs-gutter-x)/ -2);
`
const Name = styled.div`
    padding-right: 10px;
    padding-left: 10px;
    flex: 1 0 0%;
    margin-bottom: 1rem;
`
const Input = styled.input`
    border-radius: 10px;
    border: none;
    color: white;
    background-color: #141850;
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
`
const Email = styled.div`
margin-bottom: 1rem;
`
const Message = styled.div`
margin-bottom: 1rem;
`
const Textarea = styled.textarea`
    border-radius: 10px;
    border: none;
    color: white;
    background-color: #141850;
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
`
const Button = styled.button`
    cursor: pointer;
    background-color: #141850;
    font-weight: 400;
    line-height: 1.5;
    color: white;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    border-radius: 10px;
    border: none;
    padding: .375rem .75rem;
    font-size: 1rem;
    transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
`