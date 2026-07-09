import { useEffect, useRef, useCallback } from "react";

/**
 * Custom hook that tracks scroll position within a sticky hero container
 * and computes parallax values for opacity, blur, and scale.
 *
 * Uses direct DOM manipulation instead of setState to avoid re-renders
 * on every scroll frame, which would conflict with CSS animations.
 *
 * @returns {{
 *   wrapperRef: React.RefObject,
 *   heroRef: React.RefObject
 * }}
 */
export function useParallaxHero() {
  const wrapperRef = useRef(null);
  const heroRef = useRef(null);
  const rafId = useRef(null);

  const handleScroll = useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current);

    rafId.current = requestAnimationFrame(() => {
      const wrapper = wrapperRef.current;
      const hero = heroRef.current;
      if (!wrapper || !hero) return;

      const rect = wrapper.getBoundingClientRect();
      const wrapperHeight = wrapper.offsetHeight;
      const viewportHeight = window.innerHeight;

      // How far we've scrolled into the wrapper (0 = top, 1 = fully past)
      const scrolled = Math.max(0, -rect.top);
      // Normalize to 0–1 based on the extra scroll space beyond one viewport
      const progress = Math.min(
        1,
        scrolled / (wrapperHeight - viewportHeight)
      );

      // Ease the progress for smoother feel
      const eased = progress * progress;

      const opacity = Math.max(0, 1 - eased * 1.5);
      const blur = eased * 10;
      const scale = 1 - eased * 0.08;

      // Direct DOM manipulation — no re-renders
      hero.style.opacity = opacity;
      hero.style.filter = `blur(${blur}px)`;
      hero.style.transform = `scale(${scale})`;
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    // Don't call handleScroll immediately — let CSS animations play first
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [handleScroll]);

  return { wrapperRef, heroRef };
}

export default useParallaxHero;
