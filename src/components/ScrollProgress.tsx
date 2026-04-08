import { motion, useScroll, useSpring } from 'framer-motion';

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  
  // Use a spring for the scaleX to make the progress bar movement even smoother
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 450,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-[3px] pointer-events-none">
      <motion.div
        className="h-full bg-gradient-to-r from-green-primary to-green-light will-change-transform origin-center"
        style={{ scaleX }}
      >
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-green-light rounded-full blur-sm shadow-[0_0_10px_#4ade80] -translate-x-1/2" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-green-light rounded-full blur-sm shadow-[0_0_10px_#4ade80] translate-x-1/2" />
      </motion.div>
    </div>
  );
}