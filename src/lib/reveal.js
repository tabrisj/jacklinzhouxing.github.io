// Scroll-triggered reveal, standing in for framer-motion's `whileInView`.
// One IntersectionObserver per element, disconnected as soon as it fires.
export function reveal(node, options = {}) {
  const { delay = 0, y = 16 } = options;

  // Respect users who asked for reduced motion: show everything immediately.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    node.style.opacity = '1';
    return { destroy() {} };
  }

  node.style.opacity = '0';
  node.style.transform = `translateY(${y}px)`;
  node.style.transition = `opacity 600ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform 600ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`;

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        node.style.opacity = '1';
        node.style.transform = 'none';
        io.disconnect();
      }
    },
    { rootMargin: '0px 0px -10% 0px', threshold: 0 }
  );

  io.observe(node);

  return {
    destroy() {
      io.disconnect();
    }
  };
}
