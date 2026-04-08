import { memo } from 'react';
import Navbar from './components/Navbar';
import ScrollProgress from './components/ScrollProgress';
import Hero from './sections/Hero'; // Restored old hero
import About from './sections/About';
import Skills from './sections/Skills';
import Services from './sections/Services';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { ShaderBackground } from './components/ui/shader-background';
import { motion, useMotionValue } from 'framer-motion';
import { useEffect } from 'react';

// Memoize sections to prevent redundant re-renders
const MemoAbout = memo(About);
const MemoSkills = memo(Skills);
const MemoServices = memo(Services);
const MemoProjects = memo(Projects);
const MemoContact = memo(Contact);
const MemoFooter = memo(Footer);

function CustomCursor() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener('mousemove', moveCursor, { passive: true });
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="custom-cursor fixed pointer-events-none z-[9999] mix-blend-difference will-change-transform transition-[transform] duration-75 ease-out"
        style={{
          left: mouseX,
          top: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <motion.div
        className="custom-cursor-dot fixed pointer-events-none z-[9999] bg-green-primary will-change-transform"
        style={{
          left: mouseX,
          top: mouseY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </>
  );
}

function App() {
  return (
    <div className="relative min-h-screen w-screen text-white overflow-x-hidden">
      {/* GLOBAL NEON GREEN SHADER BACKGROUND */}
      <ShaderBackground />

      {/* CONTENT LAYER */}
      <div className="relative z-10 w-full font-sans antialiased">
        <CustomCursor />
        <ScrollProgress />
        <Navbar />

        {/* RESTORED ORIGINAL HERO CONTENT */}
        <Hero />

        <MemoAbout />
        <MemoSkills />
        <MemoServices />
        <MemoProjects />
        <MemoContact />
        <MemoFooter />
      </div>
    </div>
  );
}

export default App;