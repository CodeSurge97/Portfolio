import React from 'react'
import styled from 'styled-components'
import projects from './projects.json'

function Work() {
    return (
        <Section>
            <Container>
                <Title>
                    <Text> Portfolio</Text>
                </Title>
                <Projects>
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
                                    <Summary>
                                        {project.description}
                                    </Summary>
                                    <Code onClick={() => {window.open(project.links[0], '_blank')}}>See Code</Code>
                                    <Demo onClick={() => {window.open(project.links[1], '_blank')}}>See Website</Demo>
                                </Info>
                            
                            </Project> 
                        ))
                    }
                </Projects>
            </Container>
        </Section>
        
    )
}

export default Work

const Section = styled.section`
    background-color: rgb(47, 47, 47);
    color: white;
    border-bottom: 1px solid gray;
`
const Container = styled.div`
    width: 100%;
    padding: 20px;
    position: relative;
    max-width: 1320px;
    margin-right: auto;
    margin-left: auto;
    
`
const Title = styled.div`

`
const Text = styled.h2`

`
const Projects = styled.div`
    display: flex;
    flex-direction: column;
    @media(min-width: 1200px){
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
`
const Project = styled.div`
    position: relative;
    margin-bottom: 20px;
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.12), 0 1px 4px rgba(0, 0, 0, 0.24);
    padding: 20px 20px;
    // display: inline-block;
    @media (min-width: 1200px){
        width: 40%;
        height: 570px;
        margin: 20px 20px;
        
        
    }
    
`
const Info = styled.div`
`
const Header = styled.h3`

`
const Summary = styled.p`
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
    img{
        width: 100%;
    }
`