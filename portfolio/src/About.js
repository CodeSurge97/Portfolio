import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import ArrowDownward from '@material-ui/icons/ArrowDropDown'

function About({setFace}){



    return(
        <Section>
            <Container>
                <Header>
                    <Title>
                        About Me
                    </Title>
                </Header>
                <Summary>
                    <Bio>
                        <Text>
                            My name is Serge Metellus and I am a Software Engineer with a Bachelor of Science in Computer Science from Florida International University. 
                            I am passionate about developing robust and efficient software solutions of exceptional quality. I specialize in building websites using React.js and CSS to optimize websites for UI/UX and conversions. 
                            
                        </Text>
                        <Text>
                            I don’t like to define myself by the work I’ve done. I define myself by the applications that I am capable of building. Skills can be taught, personality is inherent. I prefer to keep learning, continue challenging myself, and create remarkable software.
                        </Text>
                    </Bio>
                </Summary>
                <Icon onClick={() => {setFace('front')}}>
                    <ArrowDownward/>
                </Icon>
            </Container>
        </Section>
        
    )
}
export default About;

const Section = styled.section`
    background-color: rgb(47, 47, 47);
    color: white;
    border-bottom: 1px solid gray;
`

const Container = styled.div`
    display: block;
    height: 100%;
    color: white;
    max-width: 1320px;
    margin-right: auto;
    margin-left: auto;
    position: relative; 
    padding: 20px;
`
// const About = styled.div`

// `
const Header = styled.div`

`
const Title = styled.h1`

`
const Summary = styled.div`

`
const Bio = styled.div`

`
const Text = styled.p`

`
const Icon = styled.div`
    position: absolute;
    top: 200px;
    left: 500px;
    cursor: pointer;
`