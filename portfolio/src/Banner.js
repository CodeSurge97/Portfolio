import React from 'react'
import styled from 'styled-components'
import luca from './luca.jpg'

function Banner() {
    return (
        <Container>
            <BannerImg>

            </BannerImg>
        </Container>
    )
}

export default Banner

const Container = styled.div`
    position: relative;
    background-color: rgba(0, 0, 0);
    height: 100%;
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