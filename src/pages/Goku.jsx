import { useState, useEffect } from 'react';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import NavBar from '../components/NavBar';

const Goku = ({ onVideoLoaded }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="home" className="relative overflow-hidden min-h-screen">
      {/* Home Background (always behind via z-index) */}
      <div className="fixed inset-0 -z-10">
        <Home onVideoLoaded={onVideoLoaded} />
      </div>

      {/* Main Content - layered above Home */}
      <div className="relative z-50 min-h-screen">
        <NavBar />
        <div className="flex flex-col items-center justify-center text-white gap-4 text-center min-h-screen">
          <h1
            className="hidden sm:block sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-custom"
            style={{
              transform: `translateX(${scrollY * 0.2}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            EAT.<span className="text-customRed">CODE</span>.SLEEP
          </h1>
          <h1 className="text-9xl flex flex-col space-y-3 sm:hidden sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-custom">
            <span
              style={{
                transform: `translateX(${scrollY * 0.6}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              EAT
            </span>
            <span
              className="text-customRed"
              style={{
                transform: `translateX(${scrollY * -0.6}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              CODE
            </span>
            <span
              style={{
                transform: `translateX(${scrollY * 0.6}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              SLEEP
            </span>
          </h1>
          <h2 className="text-2xl font-custom  sm:text-md md:text-xl lg:text-2xl xl:text-3xl">
            WELCOME TO MY PORTFOLIO
          </h2>
          <p className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg font-custom2 leading-tight max-w-lg mx-auto">
            A code-crafting problem solver, passionate about building intuitive software experiences with clean code and cutting-edge technologies.
          </p>
        </div>
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  );
};

export default Goku;
