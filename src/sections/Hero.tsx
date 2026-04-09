import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiArrowRight } from 'react-icons/hi';
import { cn } from '@/lib/utils';

const headlines = [
  'I build modern, fast, and scalable websites',
  'I create responsive frontend interfaces',
  'I develop secure backend systems',
  'I deploy applications to the cloud',
];

function useTypewriter(words: string[], typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000) {
  const [displayText, setDisplayText] = useState('');
  const stateRef = useRef({ wordIndex: 0, isDeleting: false });

  useEffect(() => {
    const state = stateRef.current;
    const currentWord = words[state.wordIndex];
    let timeout: NodeJS.Timeout;

    if (!state.isDeleting && displayText.length < currentWord.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length + 1));
      }, typingSpeed);
    } else if (!state.isDeleting && displayText.length === currentWord.length) {
      timeout = setTimeout(() => {
        state.isDeleting = true;
        setDisplayText(currentWord.slice(0, currentWord.length - 1));
      }, pauseTime);
    } else if (state.isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentWord.slice(0, displayText.length - 1));
      }, deletingSpeed);
    } else if (state.isDeleting && displayText.length === 0) {
      state.isDeleting = false;
      state.wordIndex = (state.wordIndex + 1) % words.length;
      timeout = setTimeout(() => {
        setDisplayText(words[state.wordIndex].slice(0, 1));
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [displayText, words, typingSpeed, deletingSpeed, pauseTime]);

  return displayText;
}

function TypewriterText() {
  const typedText = useTypewriter(headlines);
  return (
    <div className="h-8 md:h-10">
      <span className="text-green-light text-lg sm:text-xl lg:text-2xl font-mono">
        {typedText}
      </span>
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: 'reverse' }}
        className="inline-block w-0.5 h-5 md:h-6 bg-green-primary ml-1 align-middle"
      />
    </div>
  );
}

const DoodleStar = ({ className }: { className?: string }) => (
  <span className={cn("absolute text-green-primary text-star-glow animate-shimmer", className)}>
    ✦
  </span>
);

const DoodleArrow = () => (
  <svg width="50" height="24" viewBox="0 0 50 24" className="absolute -right-14 top-1/2 -translate-y-1/2">
    <motion.path
      d="M0 12 L35 12 L35 6 M35 6 L42 12 M35 6 L35 18"
      stroke="#4ade80"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
    />
  </svg>
);

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 md:pt-32 flex items-center justify-center overflow-hidden scroll-mt-16 md:scroll-mt-20 border-t border-green-500/5"
    >
      <div className="relative z-10 flex flex-col items-center text-center px-6 md:px-12 max-w-4xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <span className="text-green-primary font-mono text-sm md:text-base tracking-widest uppercase">
            Available for freelance work
          </span>
          <DoodleStar className="-top-2 -right-6 text-xs" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
        >
          Hi, I'm{' '}
          <span className="gradient-text text-glow sketch-underline">Pavitthiran</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="text-center space-y-2"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary">
            Freelance Web Developer
          </h2>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl text-green-light font-medium sketch-highlight">
            (Full Stack) <span className="inline-block sketch-bounce">🚀</span>
          </h3>
        </motion.div>

        <TypewriterText />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-text-secondary leading-relaxed"
        >
          I help businesses and startups build responsive, high-performance
          websites using modern frontend and backend technologies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-green-primary to-green-light rounded-lg blur opacity-25 group-hover:opacity-50 transition-opacity duration-300" />
            <Link
              to="projects"
              smooth
              duration={500}
              offset={-80}
              className="relative flex items-center gap-2 px-8 py-3.5 text-base sm:text-lg bg-green-primary hover:bg-green-dark text-dark-primary font-bold rounded transition-all duration-300 cursor-pointer"
            >
              View My Work
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <DoodleStar className="-top-3 -left-3 text-sm" />
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="relative group"
          >
            <Link
              to="contact"
              smooth
              duration={500}
              offset={-80}
              className="sketch-button flex items-center gap-2 px-8 py-3.5 text-base sm:text-lg text-text-primary font-semibold rounded transition-all duration-300 cursor-pointer"
            >
              Hire Me
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-green-primary/40 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-green-primary/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
