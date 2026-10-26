import { useEffect } from 'react';

const reduced = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Fade + rise elements carrying [data-reveal] as they enter the viewport. */
export function useReveal() {
  useEffect(() => {
    if (reduced()) return;
    const els = document.querySelectorAll('[data-reveal]');
    els.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(18px)';
      el.style.transition =
        'opacity .85s cubic-bezier(.2,.7,.2,1), transform .85s cubic-bezier(.2,.7,.2,1)';
    });
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          e.target.style.opacity = '1';
          e.target.style.transform = 'none';
          io.unobserve(e.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/** Scroll-driven 3D: [data-tilt] blocks rotate through the viewport, [data-fan] rows swing. */
export function useScrollDepth() {
  useEffect(() => {
    if (reduced()) return;
    let raf = 0;
    const tick = () => {
      raf = 0;
      const vh = window.innerHeight;
      const progress = (r) =>
        Math.max(-1, Math.min(1, (r.top + r.height / 2 - vh / 2) / (vh / 2)));

      document.querySelectorAll('[data-tilt]').forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        const p = progress(r);
        const amt = parseFloat(el.dataset.tilt) || 6;
        el.style.transform = `rotateX(${(p * amt).toFixed(2)}deg) translateZ(${(-Math.abs(p) * 40).toFixed(1)}px)`;
      });

      // Below sm the fan is a flat swipeable row, so it doesn't swing.
      const flat = window.innerWidth < 640;
      document.querySelectorAll('[data-fan]').forEach((el) => {
        if (flat) {
          el.querySelectorAll('figure').forEach((fig) => { fig.style.transform = ''; });
          return;
        }
        const r = el.getBoundingClientRect();
        if (r.bottom < -200 || r.top > vh + 200) return;
        const p = progress(r);
        el.querySelectorAll('figure').forEach((fig, i) => {
          if (fig.matches(':hover')) return;
          fig.style.transform =
            `rotateY(${(-13 + p * 9).toFixed(2)}deg) translateZ(${(-Math.abs(p) * 26 + i * 4).toFixed(1)}px) translateY(${(p * (i % 2 ? 14 : -10)).toFixed(1)}px)`;
        });
      });
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(tick); };
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}

/** The hero orrery leans toward the cursor. */
export function useCursorTilt(ref) {
  useEffect(() => {
    if (reduced()) return;
    const onMove = (e) => {
      const el = ref.current;
      if (!el) return;
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      el.style.transform = `rotateX(${(10 - y * 16).toFixed(2)}deg) rotateY(${(-8 + x * 22).toFixed(2)}deg)`;
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [ref]);
}
