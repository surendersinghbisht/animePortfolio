import { useRef, useState, useEffect } from 'react';
import DraggableGif from '../components/DraggableGif';

const About = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.3 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => setIsVisible(entry.isIntersecting));
    }, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className='bg-black h-screen'>
      <div
        id="about"
        ref={sectionRef}
        className="min-h-screen bg-white flex flex-col font-custom2 items-center justify-center p-8 overflow-hidden relative z-0"
        style={{
          clipPath: 'polygon(0% 10%, 100% 0%, 100% 90%, 0% 100%)', // Slant top and bottom edges
        }}
      >
        {/* Background Video */}
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          style={{ filter: 'blur(2px)', zIndex: -1 }} // Ensure video is behind the content
        >
          <source src="/videos/gohanNimbus.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* REMOVE or adjust the red overlay that is causing the pink tint */}
        {/* <div className="absolute inset-0 bg-customRed opacity-60 z-10"></div> */}

        {/* Draggable GIF */}
        {/* <DraggableGif
          src="/images/nimbus.gif"
          alt="Decorative GIF"
          containerRef={sectionRef}
          initialPosition={{ top: 10, left: 80 }}
        /> */}

        {/* Decorative elements (dots, bounce) */}
        <div className="absolute top-10 left-10">
          <div
            className={`w-3 h-3 bg-white rounded-full mb-2 animate-float transition-all duration-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          ></div>
          <div
            className={`w-2 h-2 bg-white rounded-full animate-float delay-200 transition-all duration-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          ></div>
        </div>
        <div
          className={`absolute top-1/2 left-10 w-8 h-8 bg-white opacity-50 rounded-full transition-all duration-700 ${
            isVisible ? 'animate-bounce opacity-100' : 'opacity-0'
          }`}
        ></div>

        {/* Main Content */}
        <div className="max-w-3xl text-center relative z-20"> {/* Adjust z-index */}
          <h1
            className={`text-4xl md:text-6xl font-bold font-custom mb-6 transition-all duration-500 ${
              isVisible ? 'animate-slideInLeft opacity-100' : 'animate-slideOutLeft opacity-0'
            }`}
          >
            Hi, I&apos;m Surender Singh.
          </h1>
          <p
            className={`text-lg md:text-2xl mb-8 transition-all duration-500 ${
              isVisible ? 'animate-slideInLeft opacity-100' : 'animate-slideOutLeft opacity-0'
            }`}
          >
            I&apos;m a passionate software engineer who loves building scalable and innovative solutions.
            My journey in coding began with curiosity and has evolved into a career fueled by creativity,
            innovation, and a relentless drive to learn.
          </p>
          <div
            className={`flex justify-center space-x-4 transition-all duration-500 ${
              isVisible ? 'animate-slideInRight opacity-100' : 'animate-slideOutRight opacity-0'
            }`}
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-black text-white rounded-full transition-transform transform hover:scale-110 hover:bg-white hover:text-black"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="group relative inline-flex items-center justify-center px-6 py-3 border border-black text-black rounded-full overflow-hidden transition-all duration-300 transform hover:translate-x-2 hover:bg-white"
            >
              <span
                className="absolute inset-0 bg-[url('/images/mask.webp')] bg-cover bg-center filter opacity-60 transition-opacity duration-300 group-hover:opacity-0"
                aria-hidden="true"
              ></span>
              <span className="relative z-10 font-custom group-hover:text-black">
                See My Work
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
