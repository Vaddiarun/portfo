import Nav from './components/Nav';
import Hero from './components/Hero';
import Intro from './components/Intro';
import Capabilities from './components/Capabilities';
import Problems from './components/Problems';
import Work from './components/Work';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useReveal, useScrollDepth } from './hooks/useMotion';

export default function App() {
  useReveal();
  useScrollDepth();

  return (
    <div className="overflow-x-hidden">
      <Nav />
      <Hero />
      <Intro />
      <Capabilities />
      <Problems />
      <Work />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}
