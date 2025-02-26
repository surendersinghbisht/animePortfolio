import { useState, useEffect } from 'react';

const DesktopImageCycle = ({ images, interval = 3000, animationDuration = 500 }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextIndex = (activeIndex + 1) % images.length;
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const cycle = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setActiveIndex(nextIndex);
        setIsAnimating(false);
      }, animationDuration);
    }, interval);
    return () => clearInterval(cycle);
  }, [activeIndex, nextIndex, interval, animationDuration]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Outgoing Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
        style={{
          backgroundImage: `url(${images[activeIndex]})`,
          transform: isAnimating ? 'translateX(-100%)' : 'translateX(0)',
        }}
      ></div>
      {/* Incoming Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
        style={{
          backgroundImage: `url(${images[nextIndex]})`,
          transform: isAnimating ? 'translateX(0)' : 'translateX(100%)',
        }}
      ></div>
    </div>
  );
};

export default DesktopImageCycle;
