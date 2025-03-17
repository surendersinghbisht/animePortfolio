import { useState, useEffect } from 'react';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import NavBar from '../components/NavBar';

const Goku = () => {
  const [scrollY, setScrollY] = useState(0);
  const [loading, setLoading] = useState(true); // Loading state

  useEffect(() => {
    // Simulate loading time (adjust if needed)
    const timeout = setTimeout(() => {
      setLoading(false); // Hide loader after content loads
    }, 2000);

    // Scroll event listener
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timeout); // Cleanup timeout
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Show loading screen until content is ready
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-customOrange z-50">
        <img src="/images/loading.gif" alt="Loading..." className="w-48" />
      </div>
    );
  }

  return (
    <div id="home" className="relative overflow-x-hidden">
      <NavBar />
      <Home />
      <div className="relative z-10">
        <div
          className="min-h-screen p-6 flex flex-col items-center justify-center text-white gap-4 text-center"
          id="home"
        >
          {/* EAT CODE SLEEP Text Section */}
          <h1
            className="hidden sm:block sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-heading"
            style={{
              transform: `translateX(${scrollY * 0.2}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          >
            EAT.<span className="text-customOrange">CODE</span>.SLEEP
          </h1>

          <h1 className="text-9xl flex flex-col space-y-3 sm:hidden sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-heading">
            <span
              style={{
                transform: `translateX(${scrollY * 0.6}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              EAT
            </span>
            <span
              className="text-customOrange"
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

          <h2 className="text-2xl sm:text-md md:text-xl lg:text-2xl xl:text-3xl">
            WELCOME TO MY PORTFOLIO
          </h2>
          <p className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg font-title leading-tight max-w-lg mx-auto">
            A code-crafting problem solver, passionate about building intuitive software experiences with clean code and cutting-edge technologies.
          </p>
        </div>
        <Projects id="projects" />
        <About id="about" />
        <Contact id="contact" />
      </div>
    </div>
  );
};

export default Goku;
