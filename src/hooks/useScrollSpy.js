import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds, offset = 200) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    let rafId = null;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + offset;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section && section.offsetTop <= scrollPosition) {
          if (activeSection !== sectionIds[i]) {
            setActiveSection(sectionIds[i]);
          }
          break;
        }
      }
    };

    const handleScroll = () => {
      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateActiveSection);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    updateActiveSection();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [sectionIds, offset, activeSection]);

  return activeSection;
}
