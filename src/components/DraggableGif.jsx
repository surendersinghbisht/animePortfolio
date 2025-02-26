import React from 'react';
import { motion } from 'framer-motion';

const DraggableGif = ({ src, alt, containerRef, initialPosition = { top: 10, left: 80 }, className = '' }) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      className={`absolute z-50 w-32 h-auto cursor-grab ${className}`}
      style={{
        top: `${initialPosition.top}%`,
        left: `${initialPosition.left}%`,
      }}
      drag
      dragConstraints={containerRef}
      dragElastic={0.3}
      dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
      whileDrag={{ scale: 1.1, cursor: 'grabbing' }}
    />
  );
};

export default DraggableGif;
