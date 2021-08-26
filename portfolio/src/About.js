import React, { useEffect, useState } from "react";
import styled from 'styled-components'
import ArrowDownward from '@material-ui/icons/ArrowDropDown'


function About({setSide}){



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
                <Icon onClick={() => {setSide('front')}}>
                    <ArrowDownward/>
                </Icon>
                <Ideals>
                    <Ideal>
                        <Image>
                            <img src="https://res.cloudinary.com/ssurge/image/upload/v1629683221/innovation_w0y1my.svg" alt=""/>
                        </Image>
                        <IdealTitle>Innovative</IdealTitle>
                        <Text>Proficient in producing modern, cutting-edge software</Text>
                    </Ideal> 
                    <Ideal>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" width="74" height="78" style={{shapeRendering: 'geometricPrecision', textRendering:'geometricPrecision', imageRendering:'optimizeQuality', fillRule: 'evenodd', clipRule: 'evenodd'}}viewBox="0 0 6.827 6.827"><defs><style></style></defs><g id="Layer_x0020_1"><path class="fil0" d="M1.31 2.663h4.065a.256.256 0 0 1 .257.257v2.386a.256.256 0 0 1-.257.256H1.311a.256.256 0 0 1-.257-.256V2.92a.256.256 0 0 1 .257-.257zm4.065.214H1.311a.043.043 0 0 0-.03.012.043.043 0 0 0-.013.03v2.387c0 .012.005.022.012.03a.043.043 0 0 0 .03.013h4.065a.043.043 0 0 0 .03-.013.043.043 0 0 0 .013-.03V2.92a.043.043 0 0 0-.012-.03.043.043 0 0 0-.03-.013zM1.137 5.637a.107.107 0 0 0 0 .213h4.412a.107.107 0 0 0 0-.213H1.137z"/><path class="fil0" d="M3.343 3.024a.465.465 0 0 1 .33.796.465.465 0 0 1-.796-.33.465.465 0 0 1 .466-.466zm.179.287a.252.252 0 0 0-.432.18.252.252 0 0 0 .432.178.252.252 0 0 0 0-.358z"/><path class="fil0" d="M3.01 4h.667a.312.312 0 0 1 .312.312v.89H2.697v-.89a.312.312 0 0 1 .312-.313zm.667.213h-.668a.1.1 0 0 0-.07.029.1.1 0 0 0-.03.07v.677h.867v-.677a.1.1 0 0 0-.03-.07.1.1 0 0 0-.07-.03zM1.395.977h1.158v.853H1.288V.977h.107zm.945.213H1.5v.427h.839V1.19zM3.983.977H5.69v.213H3.983zM3.983 1.297H5.69v.213H3.983z"/><path class="fil0" d="M2.027 1.723V4.07h.57v.213h-.783v-2.56zM4.943 1.403v2.88h-.747V4.07h.534V1.403z"/></g><path style={{fill:"none"}} d="M0 0h6.827v6.827H0z"/></svg>
                        <IdealTitle>User-Friendly</IdealTitle>
                        <Text>Designing practical and intuitive applications is my top priority</Text>
                    </Ideal> 
                    <Ideal>
                        <Image>
                            <img src="https://res.cloudinary.com/ssurge/image/upload/v1629683285/responsive_gmyf9d.svg" alt=""/>
                        </Image>
                        <IdealTitle>Responsive</IdealTitle>
                        <Text>My designs will work on devices of any shape or size</Text>
                    </Ideal> 
                    <Ideal>
                        <Image>
                            <img src="https://res.cloudinary.com/ssurge/image/upload/v1629683285/rocket_fhfcil.svg" alt=""/>
                        </Image>
                        <IdealTitle>Dynamic</IdealTitle>
                        <Text>Websites don't have to be static. I revel in creating complex and intriguing websites</Text>
                    </Ideal>
                </Ideals>
            </Container>
            
        </Section>
        
    )
}
export default About;

const Section = styled.section`
    background-color: rgb(47, 47, 47);
    color: white;
    border-bottom: 1px solid gray;
    // height: 100%;
    // width: 400px;
    // height: 400px;
`

const Container = styled.div`
    display: block;
    // height: 100%;
    color: white;
    // width: 400px;
    width: 100%;
    @media(min-width: 1400px){
        max-width: 1320px;
    }
    
    margin-right: auto;
    margin-left: auto;
    position: relative; 
    padding: 20px;
    padding-top: 70px;
`
// const About = styled.div`

// `
const Header = styled.div`

`
const Title = styled.h1`

`
const Summary = styled.div`
margin-bottom: 25px;
`
const Bio = styled.div`

`
const Text = styled.p`

`
const Icon = styled.div`
    position: absolute;
    top: 200px;
    left: 100px;
    cursor: pointer;
`
const Ideals = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    @media(min-width: 1200px){
        margin-top: 50px;
        flex-wrap: nowrap;
    }
    
    // justify-content: space-between;
    // flex-wrap: wrap;
    
`
const Ideal = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 50%;
    @media(min-width: 1200px){
        width: 30%;
    }
`
const Image = styled.div`
    width: 74px;
    height: 80px;
    img{
        width: 100%;
    }
    @media(min-width: 1200px){
        width: 54px;
        height: 60px;
    }
`
const IdealTitle = styled.h3`
`