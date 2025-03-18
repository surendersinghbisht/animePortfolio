import { useEffect, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const x = useMotionValue(-20);
  const y = useMotionValue(-20);
  const [isTouching, setIsTouching] = useState(false);

  // Detect if the device is mobile (touch capable)
  const isMobile = typeof window !== 'undefined' && 'ontouchstart' in window;

  useEffect(() => {
    const handleMouseMove = (e) => {
      x.set(e.clientX - 10);
      y.set(e.clientY - 10);
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        x.set(touch.clientX - 10);
        y.set(touch.clientY - 10);
      }
    };

    const handleTouchStart = () => {
      setIsTouching(true);
    };

    const handleTouchEnd = () => {
      setIsTouching(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [x, y]);

  // On mobile devices, hide the cursor if not touching
  if (isMobile && !isTouching) return null;

  return (
    <motion.div
      className="pointer-events-none fixed z-[9999] rounded-full bg-customRed opacity-80 shadow-lg"
      style={{ x, y, width: 20, height: 20,boxShadow: '0 0 200px 100px rgba(233, 47, 62, 1)' }}
      transition={{ type: 'tween', duration: 0 }}
    />
  );
};

export default CustomCursor;
