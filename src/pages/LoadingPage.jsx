import React, { useEffect } from 'react';
import gsap from 'gsap';

const LoadingPage = () => {
  useEffect(() => {
    // Animate loader on mount
    gsap.fromTo(
      '.loader-container',
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'back.out' }
    );

    // Pulse animation for loader
    gsap.to('.loader-gif', {
      scale: 1.1,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });

    // Text animation
    gsap.fromTo(
      '.loading-text',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: 'power2.out' }
    );
  }, []);

  return (
    <div className="fixed inset-0 bg-customOrange h-screen flex items-center justify-center z-[9999]">
      <div className="loader-container flex flex-col items-center justify-center gap-6">
        <img src="/images/loader.gif" alt="Loading..." className="loader-gif w-48 h-48 object-contain" />
        <h1 className="loading-text text-white font-heading text-2xl md:text-3xl tracking-widest">
          Loading...
        </h1>
        <div className="flex gap-2 mt-4">
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-2 h-2 bg-white rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
