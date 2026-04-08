import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { navLinks } from '../data/content';
import { useScrollSpy } from '../hooks/useScrollSpy';

const DoodleStar = ({ className }) => (
  <span className={`absolute text-green-light animate-shimmer ${className}`}>
    ✦
  </span>
);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeSection = useScrollSpy(navLinks.map((l) => l.id));

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform ${
        scrolled
          ? 'bg-dark-primary/90 backdrop-blur-md border-b border-dark-border shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link
            to="home"
            smooth
            duration={500}
            className="cursor-pointer flex items-center gap-1 relative"
          >
            <span className="text-2xl font-bold gradient-text sm:hidden">P</span>
            <span className="text-lg font-semibold text-text-primary hidden sm:block tracking-wide relative">
              <span className="text-2xl font-bold gradient-text">P</span>avitthiran R A
              <DoodleStar className="-top-1 -right-3 text-xs" />
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                to={link.id}
                smooth
                duration={500}
                spy
                offset={-80}
                className={`relative px-4 py-2 text-sm font-medium cursor-pointer transition-colors duration-200 ${
                  activeSection === link.id
                    ? 'text-green-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-green-primary rounded-full"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://pavitthiran.github.io/Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-dark-tertiary border border-dark-border hover:border-green-primary/30 text-text-primary hover:text-green-primary font-semibold text-sm rounded transition-all duration-300 cursor-pointer group"
            >
              Profolio
              <DoodleStar className="-top-1 -right-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>

            <Link
              to="contact"
              smooth
              duration={500}
              offset={-80}
              className="relative inline-flex items-center gap-2 px-5 py-2.5 bg-green-primary hover:bg-green-dark text-dark-primary font-semibold text-sm rounded transition-all duration-300 hover:shadow-lg hover:shadow-green-primary/25 cursor-pointer"
            >
              Hire Me
              <DoodleStar className="-top-1 -right-2 text-xs" />
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-text-primary p-2 hover:text-green-primary transition-colors relative"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            {!mobileOpen && <DoodleStar className="top-0 right-0 text-xs" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-dark-secondary/95 backdrop-blur-xl border-b border-dark-border overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.id}
                  to={link.id}
                  smooth
                  duration={500}
                  offset={-80}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium cursor-pointer transition-colors ${
                    activeSection === link.id
                      ? 'text-green-primary bg-green-subtle'
                      : 'text-text-secondary hover:text-text-primary hover:bg-dark-tertiary'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://pavitthiran.github.io/Portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-4 py-3 bg-dark-tertiary border border-dark-border text-text-primary font-semibold text-sm rounded-lg text-center cursor-pointer transition-colors hover:border-green-primary/30 hover:text-green-primary"
              >
                Profolio
              </a>
              <Link
                to="contact"
                smooth
                duration={500}
                offset={-80}
                onClick={() => setMobileOpen(false)}
                className="mt-1 px-4 py-3 bg-green-primary hover:bg-green-dark text-dark-primary font-semibold text-sm rounded-lg text-center cursor-pointer transition-colors"
              >
                Hire Me
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}