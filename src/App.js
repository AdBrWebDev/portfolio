import React, {lazy} from 'react';
import './App.css';
const Skills = lazy(() => import('./components/Skills'))
const Footer = lazy(() => import('./components/Footer'))
const Hero = lazy(() => import('./components/Hero'))
const About = lazy(() => import('./components/About'))

function App() {
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
