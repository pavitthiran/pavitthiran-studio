import { motion } from 'framer-motion';
import { HiArrowLeft, HiExternalLink, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { FaGithub } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { useRef } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const DoodleStar = ({ className }) => (
  <motion.span
    className={`absolute text-green-primary text-star-glow ${className}`}
    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
  >
    ✦
  </motion.span>
);

export default function ProjectDetails({ project, onBack }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);
  return (
    <motion.section
      id="project-details"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="py-20 md:py-28 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-5xl mx-auto relative">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          onClick={onBack}
          className="flex items-center gap-2 text-text-secondary hover:text-green-primary mb-8 transition-colors cursor-pointer group relative"
        >
          <HiArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-medium">Back to Projects</span>
          <DoodleStar className="top-0 -right-4 text-xs" />
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="mb-8 relative"
        >
          <div className="sketch-card rounded-2xl overflow-hidden relative group">
            {project.images && project.images.length > 0 ? (
              <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                slidesPerView={1}
                centeredSlides={true}
                onBeforeInit={(swiper) => {
                  if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }
                  if (swiper.params.pagination && typeof swiper.params.pagination !== 'boolean') {
                    swiper.params.pagination.el = paginationRef.current;
                  }
                }}
                onSwiper={(swiper) => {
                  // Connect refs to swiper instance
                  setTimeout(() => {
                    if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                      swiper.params.navigation.prevEl = prevRef.current;
                      swiper.params.navigation.nextEl = nextRef.current;
                    }
                    if (swiper.params.pagination && typeof swiper.params.pagination !== 'boolean') {
                      swiper.params.pagination.el = paginationRef.current;
                    }
                    
                    if (swiper.navigation) {
                      swiper.navigation.destroy();
                      swiper.navigation.init();
                      swiper.navigation.update();
                    }
                    if (swiper.pagination) {
                      swiper.pagination.destroy();
                      swiper.pagination.init();
                      swiper.pagination.update();
                    }
                  });
                }}
                pagination={{ clickable: true }}
                navigation={true}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true
                }}
                loop={project.images.length > 1}
                speed={1000}
                className="w-full h-64 md:h-[500px]"
              >
                {project.images.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <img
                      src={img}
                      alt={`${project.title} - ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-primary/60 to-transparent pointer-events-none" />
            <DoodleStar className="top-4 right-4 text-2xl" />
          </div>

          {/* Consistent Navigation Bar: [Prev] [Pagination] [Next] */}
          {project.images && project.images.length > 1 && (
            <div className="flex items-center justify-center gap-6 mt-6">
              <button
                ref={prevRef}
                className="swiper-button-prev-custom w-10 h-10 rounded-full border-2 border-green-primary/30 flex items-center justify-center text-green-primary hover:bg-green-primary hover:text-dark-primary transition-all duration-300"
              >
                <HiChevronLeft size={24} />
              </button>

              <div
                ref={paginationRef}
                className="swiper-pagination-custom flex items-center gap-2"
              />

              <button
                ref={nextRef}
                className="swiper-button-next-custom w-10 h-10 rounded-full border-2 border-green-primary/30 flex items-center justify-center text-green-primary hover:bg-green-primary hover:text-dark-primary transition-all duration-300"
              >
                <HiChevronRight size={24} />
              </button>
            </div>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4 relative inline-block">
            {project.title}
            <motion.span
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              className="absolute -bottom-2 left-0 w-full h-1 bg-green-primary/30"
            />
          </h1>

          <p className="text-text-secondary text-lg leading-relaxed mb-8">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 text-sm font-mono text-green-primary bg-green-subtle rounded-lg border border-green-primary/10"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
              className="sketch-card p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-text-primary mb-4 relative inline-block">
                Key Features
                <DoodleStar className="-top-2 -right-4 text-xs" />
              </h3>
              <ul className="space-y-3">
                {project.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.06 }}
                    className="flex items-start gap-3 text-text-secondary"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-primary mt-2 flex-shrink-0 animate-pulse" />
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 }}
              className="sketch-card p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-text-primary mb-4 relative inline-block">
                Project Links
                <DoodleStar className="-top-2 -right-4 text-xs" />
              </h3>
              <div className="space-y-4">
                <a
                  href={project.liveLink}
                  className="relative z-10 flex items-center gap-3 p-4 rounded-xl bg-dark-tertiary border border-dark-border hover:border-green-primary/30 transition-all group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <HiExternalLink size={24} className="text-green-primary" />
                  <div>
                    <div className="text-text-primary font-medium group-hover:text-green-primary transition-colors">
                      Live Demo
                    </div>
                    <div className="text-text-muted text-sm">
                      View the live application
                    </div>
                  </div>
                </a>
                <p className="text-[10px] md:text-xs text-text-muted leading-relaxed italic border-l-2 border-green-primary/20 pl-3 py-1">
                  This live demo is shared to showcase the UI, layout, and overall functionality of the project. Full access cannot be provided as it contains client work and private data, but you can explore the demo to understand the structure and quality of my work.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}