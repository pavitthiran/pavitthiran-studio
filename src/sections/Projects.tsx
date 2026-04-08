import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { HiArrowRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import { projects } from '../data/content';
import ProjectDetails from './ProjectDetails';

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

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  return (
    <SectionWrapper id="projects">
      <AnimatePresence mode="wait">
        {selectedProject ? (
          <motion.div
            key="details"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectDetails
              project={selectedProject}
              onBack={() => setSelectedProject(null)}
            />
          </motion.div>
        ) : (
          <motion.div
            key="list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <SectionTitle
              title="My Work"
              subtitle="Real projects that showcase my development expertise"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Swiper
                modules={[Pagination, Autoplay, Navigation]}
                slidesPerView={1}
                centeredSlides={true}
                spaceBetween={30}
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
                loop={true}
                speed={500}
                className="project-swiper overflow-visible"
              >
                {projects.map((project, pi) => (
                  <SwiperSlide key={project.id}>
                    <motion.div
                      whileHover={{ scale: 1.02, rotate: 0, y: 0 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                      className="w-full max-w-4xl mx-auto sketch-card group relative rounded-2xl overflow-hidden cursor-pointer min-h-[450px]"
                      onClick={() => setSelectedProject(project)}
                      style={{ 
                        rotate: pi % 2 === 0 ? -1.5 : 1.5,
                        y: pi % 2 === 0 ? -8 : 8
                      }}
                    >
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-dark-card/50 to-transparent" />
                        <DoodleStar className="top-2 right-2 text-xl" />
                      </div>

                      <div className="p-6">
                        <h3 className="text-xl font-bold text-text-primary mb-2 group-hover:text-green-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-text-secondary text-sm leading-relaxed mb-4 line-clamp-2">
                          {project.shortDesc}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.techStack.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 text-xs font-mono text-green-primary bg-green-subtle rounded-md border border-green-primary/10"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.techStack.length > 3 && (
                            <span className="px-2.5 py-1 text-xs text-text-muted">
                              +{project.techStack.length - 3} more
                            </span>
                          )}
                        </div>

                        <div className="flex items-center gap-2 text-green-primary text-sm font-medium group-hover:gap-3 transition-all">
                          View Details
                          <HiArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Case-tested Navigation Controls: [Prev] [Pagination] [Next] */}
              <div className="flex items-center justify-center gap-6 mt-10">
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
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
}