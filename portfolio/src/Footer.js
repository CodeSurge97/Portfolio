import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import CopyrightIcon from '@material-ui/icons/Copyright'

function Footer() {
    return (
        <Container>
            <Links>
                <Github href='https://github.com/CodeSurge97'>
                    <GithubIcon/>
                </Github>
                <Linkedin href='https://www.linkedin.com/in/sergemetellus/'>
                    <LinkedinIcon/>
                </Linkedin>
                <Facebook href='https://www.facebook.com/Surge97'>
                    <Facebookicon/>
                </Facebook>
            </Links>
            <Copyright>
                <Text>Copyright <CopyrightIcon/> Serge Metellus. All Rights Reserved</Text>
            </Copyright>
        </Container>
    )
}

export default Footer

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #141850;
    padding: 30px;
`
const Links = styled.div`
    svg{
        font-size: 1rem;
    }
    @media (min-width: 992px){
        svg{
            font-size: 1.5rem;
        }
    }
`
const GithubIcon = styled(GitHubIcon)`
    color: white;
    height: 20px;
`
const LinkedinIcon = styled(LinkedInIcon)`
    color: white;
    font-size: 0.60rem;
`
const Facebookicon = styled(FacebookIcon)`
    color: white;
`
const Github = styled.a`
    cursor: pointer;
`
const Linkedin = styled.a`
    cursor: pointer;
`
const Facebook = styled.a`
    cursor: pointer;
`
const Copyright = styled.div`
    color: white;
    svg{
        font-size: 0.50rem;
    }
    @media (min-width: 992px){
        svg{
            font-size: 0.85rem;
        }
    }
`

const Text = styled.span`
    font-size: 0.65rem;
    @media (min-width: 992px){
        font-size: 1rem;
    }
`