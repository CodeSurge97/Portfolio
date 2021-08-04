import React from 'react'
import styled from 'styled-components'
import luca from './luca.jpg'
import ArrowDownward from '@material-ui/icons/ArrowDropDown'

function Banner({setFace}) {
    return (
        <Container>
            <BannerImg>
                <Icon onClick={() => {setFace('bottom')}}>
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
    overflow: hidden;
`
const BannerImg = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity: 0.3;
    display: block;
    width: 100%;
    min-height: 600px;
    background-image: url("${luca}");

`
const Icon = styled.div`
    position: absolute;
    top: 200px;
    left: 500px;
    cursor: pointer;
    color: white;
`