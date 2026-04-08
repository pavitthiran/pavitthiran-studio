import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { services } from '../data/content';

const DoodleArrow = () => (
  <svg width="30" height="30" viewBox="0 0 30 30" className="absolute -bottom-2 -right-2">
    <motion.path
      d="M5 25 L15 5 L25 25 M15 5 L15 20"
      stroke="#22c55e"
      strokeWidth="1.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, repeat: Infinity, repeatDelay: 2 }}
    />
  </svg>
);

export default function Services() {
  return (
    <SectionWrapper id="services">
      <SectionTitle
        title="What I Can Do For You"
        subtitle="Professional services tailored to your business needs"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            whileHover={{ rotate: Math.random() * 2 - 1 }}
            className="sketch-card group relative p-8 rounded-xl overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-primary to-green-light scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            
            <div className="absolute -top-4 -right-4 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <DoodleArrow />
            </div>

            <div className="relative z-10">
              <div
                className="w-14 h-14 rounded-xl bg-green-subtle border border-green-primary/20 flex items-center justify-center mb-6 group-hover:glow-green-sm transition-all duration-300 group-hover:rotate-3"
              >
                <service.icon
                  size={28}
                  className="text-green-primary group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-green-primary transition-colors duration-300 sketch-underline">
                {service.title}
              </h3>

              <p className="text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
            
            <motion.div
              className="absolute bottom-0 left-0 w-full h-1"
              initial={{ scaleX: 0 }}
              whileHover={{ scaleX: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="h-full bg-gradient-to-r from-green-primary to-green-light" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}