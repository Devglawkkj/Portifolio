import { useState, useEffect } from 'react';

/**
 * Scroll spy hook — tracks which section is currently in view
 * Used for active navbar link highlighting
 *
 * @param {Array} sectionIds - Array of section IDs to track (e.g. ['hero', 'about', 'skills'])
 * @param {number} threshold - Intersection Observer threshold (default 0.3)
 * @returns {string} - ID of the currently active section
 */
export function useActiveSection(sectionIds, threshold = 0.3) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || '');

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold,
    };

    const observer = new IntersectionObserver((entries) => {
      const entriesInView = entries.filter((entry) => entry.isIntersecting);

      if (entriesInView.length > 0) {
        // Find the entry with the highest intersection ratio for most accurate active state
        const mostVisible = entriesInView.reduce((prev, curr) =>
          prev.intersectionRatio > curr.intersectionRatio ? prev : curr
        );
        setActiveSection(mostVisible.target.id);
      }
    }, options);

    // Observe all sections
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => {
      sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sectionIds, threshold]);

  return activeSection;
}
