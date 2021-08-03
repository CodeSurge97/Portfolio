import React from 'react'
import styled from 'styled-components'
import projects from './projects.json'

function Work() {
    return (
        <Section>
            <Container>
                {
                    projects.map((project) => (
                        <Project> 
                            <Image>
                                <img src={project.image} alt="" />
                            </Image>
                            <Info>
                                <Header>
                                    {project.title}
                                </Header>
                                <Text>
                                    {project.description}
                                </Text>
                                <Code onClick={() => {window.open(project.links[0], '_blank')}}>See Code</Code>
                                <Demo onClick={() => {window.open(project.links[1], '_blank')}}>See Website</Demo>
                            </Info>
                           
                        </Project> 
                    ))
                }
            </Container>
        </Section>
        
    )
}

export default Work

const Section = styled.section`
    background-color: rgb(47, 47, 47);
    color: white;
    border-bottom: 2px solid white;
`
const Container = styled.div`
    width: 100%;
    display: block;
    padding: 20px;
    position: relative;
`
const Project = styled.div`
    position: relative;
    margin-bottom: 50px;
    
`
const Info = styled.div`
`
const Header = styled.h3`

`
const Text = styled.p`

`
const Code = styled.button`
    cursor: pointer;
    background-color: #141850;
    font-weight: 400;
    line-height: 1.5;
    color: white;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    border: none;
    padding: .375rem 1rem;
    font-size: 1rem;
    width: 80%;
    margin-bottom: 1rem;

`
const Demo = styled.button`
    cursor: pointer;
    font-weight: 400;
    line-height: 1.5;
    color: black;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    border: none;
    padding: .375rem 1rem;
    font-size: 1rem;
    width: 80%;
`
const Image = styled.div`
    margin-bottom: 25px;
    img{
        width: 100%;
    }
`