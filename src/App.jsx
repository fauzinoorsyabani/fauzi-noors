import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Awards from './components/Awards';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MeshBackground from './components/MeshBackground';
import './styles/index.css';

function App() {
  return (
    <div className="app">
      <MeshBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Experience />
        <Awards />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
