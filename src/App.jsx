import Nav from './components/Nav';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useState } from 'react';

function App() {
  const [isMobileNavOpened, setIsMobileNavOpened] = useState(false);
  return (
    <>
      <Nav setIsMobileNavOpened={setIsMobileNavOpened} />
      <MobileNav isMobileNavOpened={isMobileNavOpened} setIsMobileNavOpened={setIsMobileNavOpened} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
