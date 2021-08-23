import React, {useEffect, useState} from 'react'
import Banner from './Banner'
import About from './About'
import styled from 'styled-components'
import './Cube.css'

function Prism() {
    const [side, setSide] = useState('front')
    let cubeStyle = (side == 'front') ? {transform: 'translateZ(-50px) rotateY(0deg)'} : {transform: 'translateZ(-100px) rotateX(90deg)'}
    const onScroll = () => {
            setSide('bottom')
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    useEffect(() => {
        
    
       
    }, []);
   
    return (
        <div class="scene">
            <div class="cube" onScroll={onScroll} style={cubeStyle}>
                <div class="cube__face cube__face--front" ><Banner setSide={setSide}/></div>
                <div class="cube__face cube__face--back">back</div>
                <div class="cube__face cube__face--right">right</div>
                <div class="cube__face cube__face--left"></div>
                <div class="cube__face cube__face--top">{}</div>
                <div class="cube__face cube__face--bottom"><About setSide={setSide}/></div>
            </div>
        </div>
    )
}

export default Prism

// const Scene = styled.div`

// `
// const Cube = styled.div`

// `
// const cubeFace = styled.div`

// `