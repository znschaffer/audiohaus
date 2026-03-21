import { useEffect } from "react";

/**
 * Wires up the IntersectionObserver that drives `.fade-in` → `.visible`
 * transitions across the whole page.  Called once from App.
 */
export function useFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("visible");
            }, 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    const els = document.querySelectorAll(".fade-in");
    els.forEach((el, i) => {
      (el as HTMLElement).style.transitionDelay = `${i * 40}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
