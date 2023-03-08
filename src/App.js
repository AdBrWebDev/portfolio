import React, {lazy, useEffect} from 'react';
import './App.css';
import Aos from 'aos'
import "aos/dist/aos.css";
const Skills = lazy(() => import('./components/Skills'))
const Footer = lazy(() => import('./components/Footer'))
const Hero = lazy(() => import('./components/Hero'))
const About = lazy(() => import('./components/About'))

function App() {

  useEffect(() => {
    Aos.init()
  })

  return (
    <>
    <Hero />
    <About />
    <Skills />
    <Footer />
    </>
  );
}

export default App;
