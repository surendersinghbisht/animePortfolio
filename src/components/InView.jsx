import { useState, useEffect, useRef } from 'react';

const useInView = (threshold = 0.75) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.intersectionRatio >= threshold);
      },
      { threshold }
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
};

export default useInView;
