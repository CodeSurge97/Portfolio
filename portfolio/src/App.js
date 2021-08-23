import React, {useState, useEffect}  from 'react';
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { PageTransition } from "@steveeeie/react-page-transition";
import {CubeTransition} from 'react-3d-cube-transition'
import styled from 'styled-components'
import 'react-3d-cube-transition/dist/index.css'
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js'
import Banner from './Banner';
import About from './About';
import Work from './Work';
import Footer from './Footer';
import Contact from './Contact';
import Prism from './Cube'

function App() {

  const [face, setFace] = useState('left');
  
  const Links = () => (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </>
  );

  // const Home = props => Banner;
  
  // const Abouts = props => About;
  // window.onscroll = (e) => {
  //   e.preventDefault()
  //   if(window.scrollY >= 50){
  //     setFace('bottom')
  //   }
  //   else 
  //   {
  //     setFace('front')
  //   }
  // }
  const Click = () => {
    setFace('bottom')
  }
  const Transition1 = () => {
    return (
        <div></div>
    )
  }
  const Transition2 = () => {
    return (
        <div onClick={() => {setFace('left')}}></div>
    )
  }
  return (
    <div className="App">
     
      {/* <BrowserRouter> 
      <Nav/>
      {/* <Links/> }
      <Route
        render={({ location }) => {
          return (
            <PageTransition
              preset="cubeToTop"
              transitionKey={location.pathname}
            >
              <Switch location={location}>
                <Route exact path="/" component={Banner} />
                <Route exact path="/about" component={About} />
              </Switch>
            </PageTransition>
          );
        }}
      />
      <div onClick={() => {setFace('left')}} style={{position: "absolute", right: 0}}><About/></div>
      </BrowserRouter> */} 
      <Nav/>
      <Banner/>
      <About/>
      {/* <Cubetransition 
        face={face}
        frontCSS={{height: '600px'}}
        rightCSS={{height: '600px'}}
        leftCSS={{height: '600px'}}
        backCSS={{height: '600px'}}
        topCSS={{height: '600px'}}
        bottomCSS={{height: '600px'}}
        topPage={<About setFace={setFace}/>}
        leftPage={<Banner setFace={setFace}/>}
        /> */}

      
     
      <Work></Work>
      <Contact/>
      <Footer/>
      
    </div>
  );
    
}

export default App;

const Cubetransition = styled(CubeTransition)`
`