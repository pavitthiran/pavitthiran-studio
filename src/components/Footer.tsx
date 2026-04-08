import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { Link } from 'react-scroll';

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/pavitthiran', label: 'GitHub' },
  { icon: FaLinkedinIn, href: 'https://linkedin.com/in/pavitthiran', label: 'LinkedIn' },
];

const DoodleStar = ({ className }) => (
  <motion.span
    className={`absolute text-green-light ${className}`}
    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    ✦
  </motion.span>
);

const DoodleCircle = ({ className }) => (
  <motion.div
    className={`absolute border border-green-primary/20 rounded-full ${className}`}
    animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
    transition={{ duration: 3, repeat: Infinity }}
  />
);

export default function Footer() {
  return (
    <footer className="relative border-t border-dark-border bg-dark-primary py-12">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <DoodleCircle className="w-32 h-32 top-0 left-[10%]" />
        <DoodleCircle className="w-20 h-20 bottom-0 right-[15%]" />
        <DoodleStar className="top-8 right-[25%] text-lg" />
        <DoodleStar className="bottom-8 left-[30%] text-sm" />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link
              to="home"
              smooth
              duration={500}
              className="cursor-pointer flex items-center gap-2 relative"
            >
              <span className="text-lg font-semibold text-text-primary tracking-wide">
                <span className="text-2xl font-bold gradient-text">P</span>avitthiran R A
              </span>
              <DoodleStar className="-top-1 -right-3 text-xs" />
            </Link>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-primary animate-pulse" />
              <span className="text-text-secondary text-sm">
                Available for freelance work
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, rotate: Math.random() * 4 - 2 }}
                className="sketch-card w-10 h-10 rounded-xl flex items-center justify-center text-text-secondary hover:text-green-primary transition-colors duration-300"
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-dark-border flex flex-col md:flex-row items-center justify-between gap-4 relative">
          <p className="text-text-muted text-sm">
            &copy; {new Date().getFullYear()} Pavitthiran. All rights reserved.
          </p>
          <p className="text-text-muted text-sm">
            Built with{' '}
            <span className="text-green-primary">React</span> &{' '}
            <span className="text-green-primary">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}