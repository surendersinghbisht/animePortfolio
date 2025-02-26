import { useState, useEffect, useRef } from 'react';
import HoverCard from '../components/HoverCard';
import { ProjectList } from '../custom/projects';
import { FaAnglesRight, FaAnglesLeft } from "react-icons/fa6";
import MobileCardWrapper from '../components/MobileCardWrapper'; // adjust the path as needed

const Projects = () => {
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef(null);
  const desktopScrollRef = useRef(null);
  const mobileScrollRef = useRef(null);

  // State to track if we're at the start or end of desktop scroll
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const containerTop = containerRef.current.offsetTop;
        const scrolled = window.scrollY - containerTop;
        const offset = scrolled * 0.5;
        setTranslateX(offset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll functions for desktop navigation buttons
  const handlePrev = () => {
    if (desktopScrollRef.current) {
      const width = desktopScrollRef.current.offsetWidth;
      desktopScrollRef.current.scrollBy({ left: -width, behavior: 'smooth' });
    }
  };

  const handleNext = () => {
    if (desktopScrollRef.current) {
      const width = desktopScrollRef.current.offsetWidth;
      desktopScrollRef.current.scrollBy({ left: width, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleDesktopScroll = () => {
      if (desktopScrollRef.current) {
        const { scrollLeft, offsetWidth, scrollWidth } = desktopScrollRef.current;
        setIsAtStart(scrollLeft <= 0);
        setIsAtEnd(scrollLeft + offsetWidth >= scrollWidth - 1);
      }
    };
    if (desktopScrollRef.current) {
      desktopScrollRef.current.addEventListener('scroll', handleDesktopScroll);
      // Call once to initialize
      handleDesktopScroll();
    }
    return () => {
      if (desktopScrollRef.current) {
        desktopScrollRef.current.removeEventListener('scroll', handleDesktopScroll);
      }
    };
  }, []);

  const navigateToDetailsPage = (id) => {
    window.open(`/details/${id}`, '_blank');
  };

  return (
    <div
    id='projects'
      ref={containerRef}
      className="w-full p-10 min-h-screen"
      style={{ background: "linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.75), black)" }}
    >
      <div className="p-6">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-heading transition-transform duration-0 ease-in-out text-customOrange"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          RECENT PROJECTS
        </h1>
        <p className="text-white text-start sm:pr-40 mt-4">
          &quot;Here are some of my recent projects, reflecting my expertise and approach to problem-solving. Take a look at the work that demonstrates what I can do!&quot;
        </p>
      </div>

      {/* Mobile View: Horizontal Carousel with active card effect */}
      <div className="md:hidden relative">
        <div
          ref={mobileScrollRef}
          className="overflow-x-auto snap-x snap-mandatory flex gap-4 hide-scrollbar"
        >
          {ProjectList.map((project, id) => (
            <MobileCardWrapper key={id}>
              <HoverCard
                title={project.title}
                buttonText={project.buttonText}
                defaultImage={project.defaultImage}
                description={project.description}
                hoverImage={project.hoverImage}
                onClick={() => navigateToDetailsPage(id)}
              />
            </MobileCardWrapper>
          ))}
        </div>
      </div>

      {/* Desktop View: Side-by-side Layout with Navigation Buttons */}
      <div className="hidden md:block relative">
        <div
          ref={desktopScrollRef}
          className="overflow-x-auto snap-x snap-mandatory flex gap-4 hide-scrollbar"
        >
          {ProjectList.map((project, id) => (
            <div key={id} className="snap-center flex-shrink-0 w-full sm:p-10">
              <HoverCard
                title={project.title}
                buttonText={project.buttonText}
                defaultImage={project.defaultImage}
                description={project.description}
                hoverImage={project.hoverImage}
                onClick={() => navigateToDetailsPage(id)}
              />
            </div>
          ))}
        </div>
        {/* Conditionally render Prev button */}
        {!isAtStart && (
          <FaAnglesLeft
            onClick={handlePrev}
            className="absolute left-0 top-1/2 text-customOrange text-2xl mr-2 z-10 transform translate-x-2 hover:translate-x-0 transition-transform"
          />
        )}
        {/* Conditionally render Next button */}
        {!isAtEnd && (
          <FaAnglesRight
            onClick={handleNext}
            className="absolute right-0 top-1/2 text-customOrange text-2xl z-10 transform -translate-x-2 hover:translate-x-0 transition-transform"
          />
        )}
      </div>
    </div>
  );
};

export default Projects;
