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
  console.log('tile',title)
  return (
    <>
      {/* Mobile Version: Unchanged */}
      <div className={`relative group w-full md:hidden h-96 overflow-hidden ${className}`}>
        {/* Default Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${defaultImage})`, borderRadius: '0.5rem' }}
        >
          {/* Translucent overlay */}
          <div className="absolute inset-0 bg-black opacity-80"></div>
        </div>
        {/* Hover Background Image: slides in from left */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-200 transform -translate-x-full group-hover:translate-x-0"
          style={{ backgroundImage: `url(${hoverImage})` }}
        >
          {/* Translucent overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        {/* Content: Title, Description and Button */}
        <div className="relative z-10 p-4 flex flex-col items-center justify-center h-full">
            <h1 className="text-xl md:text-2xl text-white mb-2 text-center">
              {title}
            </h1>
          <p className="text-white hidden sm:block md:block mb-4 text-center">{description}</p>
          <a>
            <button
              className="w-auto px-4 py-2 bg-customOrange text-white rounded transition-colors duration-300 hover:bg-white hover:text-black"
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
            images={[defaultImage, hoverImage]} 
            interval={3000} 
            animationDuration={1000} 
          />
        </div>

        {/* Right Side: Title, Description and Button */}
        <div className="w-1/2 flex flex-col justify-between p-16 bg-transparent">
        <div className='flex flex-col'>
            <h1 className="text-2xl md:text-4xl font-heading text-white mb-4">
              {title}
            </h1>
          <p className="text-white font-heading mb-4">{description}</p>
          </div>
          <a>
            <button
              className="w-auto sm:w-64 px-4 py-2 bg-customOrange text-white rounded transition-colors duration-300 hover:bg-white hover:text-black"
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
