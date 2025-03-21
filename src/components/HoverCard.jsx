import React from 'react';
import DesktopImageCycle from './ImageCycle'; // Ensure this component is implemented

const HoverCard = ({
  defaultImage,
  hoverImage,
  title,
  description,
  buttonText,
  onClick,
  className = ''
}) => {
  return (
    <>
      {/* Mobile Version: Updated for a more realistic, transparent glass effect */}
      <div className={`relative group w-full md:hidden min-h-[70vh] overflow-hidden ${className}`}>
        {/* Glass Effect Background */}
        <div className="absolute inset-0 bg-[rgba(255,255,255,0.05)] backdrop-blur-sm border border-white/10"></div>
        {/* Content: Title, Description and Button */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-custom md:text-2xl text-white mb-2 text-center animate-textShine">
            {title}
          </h1>
          <p className="text-white text-sm font-customRed mb-4 text-center">
            {description}
          </p>
          <a>
            <button
              className="w-auto px-4 py-2 bg-customRed text-white rounded transition-colors duration-300 hover:bg-white hover:text-black"
              onClick={onClick}
            >
              {buttonText}
            </button>
          </a>
        </div>
      </div>

      {/* Desktop Version: Side-by-side layout with animated image cycle */}
      <div className={`hidden md:flex w-full ${className}`}>
        {/* Left Side: Automated Image Cycle */}
        <div className="relative group w-1/2 h-96 overflow-hidden">
          <DesktopImageCycle 
            images={[hoverImage]} 
            interval={3000} 
            animationDuration={1000} 
          />
        </div>

        {/* Right Side: Title, Description and Button */}
        <div className="w-1/2 flex flex-col justify-between p-16 bg-transparent">
          <div className="flex flex-col">
            <h1 className="text-2xl md:text-4xl font-custom text-white mb-4">
              {title}
            </h1>
            <p className="text-white font-custom2 mb-4">{description}</p>
          </div>
          <a>
            <button
              className="w-auto sm:w-64 px-4 py-2 bg-customRed text-white rounded transition-colors duration-300 hover:bg-white hover:text-black"
              onClick={onClick}
            >
              {buttonText}
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default HoverCard;
