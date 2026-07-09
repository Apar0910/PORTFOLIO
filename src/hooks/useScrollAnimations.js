import { useEffect, useRef, useState } from "react";

/**
 * Custom hook that uses IntersectionObserver to detect when an element
 * enters the viewport and triggers a CSS class toggle for scroll animations.
 *
 * @param {Object} options
 * @param {number} options.threshold - Visibility threshold (0-1) to trigger animation
 * @param {string} options.rootMargin - Root margin for observer
 * @param {boolean} options.triggerOnce - If true, animation only triggers once
 * @returns {{ ref: React.RefObject, isVisible: boolean }}
 */
export function useScrollReveal({
  threshold = 0.15,
  rootMargin = "0px 0px -60px 0px",
  triggerOnce = true,
} = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, rootMargin, triggerOnce]);

  return { ref, isVisible };
}

/**
 * Hook that returns multiple refs for staggered animations within a section.
 * Each ref gets its own IntersectionObserver.
 *
 * @param {number} count - Number of elements to observe
 * @param {Object} options - Same options as useScrollReveal
 * @returns {Array<{ ref: React.RefObject, isVisible: boolean }>}
 */
export function useStaggeredReveal(count, options = {}) {
  const items = Array.from({ length: count }, () =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useScrollReveal(options)
  );
  return items;
}

export default useScrollReveal;
