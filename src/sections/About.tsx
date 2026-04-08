import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { stats } from '../data/content';

const bulletPoints = [
  'I work on both frontend and backend — creating responsive UI using React and Tailwind CSS, and building secure, efficient backend systems using Spring Boot and REST APIs.',
  'I recently completed a freelance e-commerce project where I developed a complete frontend with real-time API integration, ensuring smooth user experience and performance.',
  'I focus on clean code, scalable architecture, and delivering projects on time.',
];

const DoodleCircle = ({ className }) => (
  <motion.div
    className={`absolute border border-green-primary/30 rounded-full ${className}`}
    animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  />
);

const DoodleStar = ({ className }) => (
  <motion.span
    className={`absolute text-green-primary text-star-glow ${className}`}
    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    ✦
  </motion.span>
);

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionTitle
        title="About Me"
        subtitle="A passionate developer building reliable web solutions end-to-end"
      />

      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative group"
        >
          <DoodleCircle className="w-72 h-72 md:w-80 md:h-80 top-0 left-1/2 -translate-x-1/2" />
          
          <div className="relative w-72 h-72 md:w-80 md:h-80 mx-auto lg:mx-0">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-green-primary/20 to-green-light/10 blur-xl group-hover:blur-2xl transition-all duration-500" />
            <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-dark-border group-hover:border-green-primary/30 transition-all duration-500 sketch-card">
              <div className="w-full h-full bg-gradient-to-br from-dark-tertiary to-dark-card flex items-center justify-center relative">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-primary to-green-light flex items-center justify-center text-4xl font-bold text-dark-primary relative">
                    P
                    <DoodleStar className="-top-2 -right-4 text-sm" />
                  </div>
                  <p className="text-text-secondary text-sm font-mono">@pavitthiran</p>
                </div>
              </div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute -bottom-3 -right-3 w-20 h-20 bg-green-primary/10 rounded-xl border border-green-primary/20 flex items-center justify-center hover:scale-110 hover:rotate-3 transition-transform duration-300"
            >
              <span className="text-green-primary font-bold text-lg">3+</span>
              <span className="text-green-primary text-[10px] absolute bottom-2">yrs</span>
            </motion.div>
          </div>
          
          <DoodleStar className="-left-4 top-1/4 text-xl" />
          <DoodleStar className="-right-2 bottom-1/3 text-lg" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-text-primary mb-4 relative inline-block">
            Freelance Full Stack Web Developer
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              className="absolute -bottom-1 left-0 w-full h-0.5 bg-green-primary/30"
            />
          </h3>
          <p className="text-text-secondary leading-relaxed mb-6">
            I'm a freelance full stack web developer specializing in building
            modern, scalable, and user-friendly web applications.
          </p>

          <div className="space-y-4 mb-8">
            {bulletPoints.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.15 }}
                className="flex items-start gap-3"
              >
                <span className="w-2 h-2 rounded-full bg-green-primary flex-shrink-0 mt-2 animate-pulse" />
                <span className="text-text-secondary text-sm leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="grid grid-cols-3 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, rotate: Math.random() * 2 - 1 }}
                className="sketch-card text-center p-4 rounded-xl cursor-default"
              >
                <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className="text-text-muted text-xs md:text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}