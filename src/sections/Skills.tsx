import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { skillCategories } from '../data/content';

const DoodleStar = ({ className }) => (
  <motion.span
    className={`absolute text-green-light ${className}`}
    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    ✦
  </motion.span>
);

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionTitle
        title="Skills & Technologies"
        subtitle="I build complete web solutions — from modern frontend interfaces to scalable backend systems and deployment"
      />

      <div className="space-y-12">
        {skillCategories.map((category, ci) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: ci * 0.1, duration: 0.5 }}
            className="relative"
          >
            <h3 className="text-lg font-bold text-green-primary mb-5 font-mono tracking-wide uppercase flex items-center gap-2">
              {category.title}
              <DoodleStar className="text-sm" />
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.skills.map((skill, si) => (
                <motion.div
                  key={skill.name}
                  whileHover={{ scale: 1.02, rotate: Math.random() * 2 - 1 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: si * 0.05 }}
                  className="sticky-note group relative p-5 cursor-default"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10 flex items-center gap-4">
                    <div
                      className="sketch-icon w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110"
                      style={{
                        backgroundColor: `${skill.color}15`,
                        boxShadow: `0 0 0 1px ${skill.color}20`,
                      }}
                    >
                      <skill.icon
                        size={22}
                        style={{ color: skill.color }}
                        className="transition-transform duration-300"
                      />
                    </div>
                    <span className="text-sm font-semibold text-text-primary group-hover:text-green-primary transition-colors">
                      {skill.name}
                    </span>
                  </div>
                  
                  <motion.div
                    className="absolute top-2 right-2 w-3 h-3 opacity-0 group-hover:opacity-60 transition-opacity"
                  >
                    <svg viewBox="0 0 20 20" fill="none" className="w-full h-full">
                      <path d="M2 10L8 16L18 4" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}