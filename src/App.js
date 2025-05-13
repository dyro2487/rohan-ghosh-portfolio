import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import styled from 'styled-components';
import PhotoCarousel from './components/PhotoCarousel';
import CVSection from './components/CVSection';



const Main = styled.main`
  padding-top: 70px; /* To account for fixed header */
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem;
  background-color: #333;
  color: #fff;
`;

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <PhotoCarousel />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <CVSection />
        <Contact />
      </Main>
      <Footer>
        <p>© {new Date().getFullYear()} Rohan Ghosh. All rights reserved.</p>
      </Footer>
    </>
  );
}

export default App;