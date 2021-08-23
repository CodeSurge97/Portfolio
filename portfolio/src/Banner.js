import React from 'react'
import styled from 'styled-components'
import luca from './luca.jpg'
import ArrowDownward from '@material-ui/icons/ArrowDropDown'

function Banner({setSide}) {
    return (
        <Container >
            <BannerImg>
                <Icon onClick={() => {setSide('bottom')}}>
                    <ArrowDownward/>
                </Icon>
            </BannerImg>
        </Container>
    )
}

export default Banner

const Container = styled.div`
    position: relative;
    background-color: rgba(0, 0, 0);
    height: 100%;
    // width: 400px;
    overflow: hidden;
`
const BannerImg = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.3;
    height: 100%;
    display: block;
    // width: 400px;
    // min-height: 200px;
    background-image: url("${luca}");

`
const Icon = styled.div`
    position: absolute;
    @media(min-width: 1400px){
        top: 800px;
        left: 950px;
    }
    top: 200px;
    left: 100px;
    cursor: pointer;
    color: white; 
    border: 1px solid lightgray;
`