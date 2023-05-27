import '../styles/mainContent/mainContent.css';
import Home from './home/Home';
import About from './about/About';
import Projects from './projects/Projects';
import Contact from './contact/Contact';
import Footer from '../Footer';

export default function MainContent() {
  return (
    <>
      <main className='main'>
        <Home />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
