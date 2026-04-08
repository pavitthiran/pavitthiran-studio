import { motion } from 'framer-motion';

interface SectionWrapperProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative py-20 md:py-28 px-6 md:px-12 lg:px-20 scroll-mt-16 md:scroll-mt-20 border-t border-green-500/10 ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px', amount: 0.1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-6xl mx-auto relative z-10 will-change-transform"
      >
        {children}
      </motion.div>
    </section>
  );
}