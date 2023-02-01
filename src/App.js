import React, {lazy, Suspense} from 'react';
import './App.css';
import Loading from './components/Loading'
const Contact  = lazy(() => import('./components/Contact'))
const Skills = lazy(() => import('./components/Skills'))
const Footer = lazy(() => import('./components/Footer'))
const Hero = lazy(() => import('./components/Hero'))
const About = lazy(() => import('./components/About'))
const ThingsIDo = lazy(() => import('./components/ThingsIDo'))

function App() {
  return (
    <Suspense fallback={<Loading />}>
    <Hero />
    <About />
    <ThingsIDo />
    <Skills />
    <Contact />
    <Footer />
    </Suspense>
  );
}

export default App;
