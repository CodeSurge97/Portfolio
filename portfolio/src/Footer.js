import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

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
                <Text>Copyright Serge Metellus</Text>
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

`
const GithubIcon = styled(GitHubIcon)`
    color: white;
    height: 20px;
`
const LinkedinIcon = styled(LinkedInIcon)`
    color: white;
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
`
const Text = styled.span`

`