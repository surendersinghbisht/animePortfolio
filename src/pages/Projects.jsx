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
  const [isTitleInView, setIsTitleInView] = useState(false);

  // State to track if we're at the start or end of desktop scroll
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const containerTop = containerRef.current.offsetTop;
        const scrolled = window.scrollY - containerTop;
        const offset = scrolled * 0.4;
        setTranslateX(offset);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === containerRef.current) {
            setIsTitleInView(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
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
      id="projects"
      ref={containerRef}
      className="w-full min-h-screen font-custom px-4 sm:px-8 lg:px-16 py-16 relative overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.75), black)' }}
    >
      <div className="relative max-w-6xl mx-auto">
        <div className="flex flex-col gap-4">
          <span className="inline-flex items-center gap-2 text-xs sm:text-sm tracking-[0.25em] uppercase text-gray-300">
            <span className="h-px w-8 bg-customRed" />
            Featured Work
          </span>
          <h1
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-custom text-customRed tracking-tight drop-shadow-lg transition-all duration-700 ease-out"
            style={{
              transform: `translateX(${translateX}px)`,
              whiteSpace: 'nowrap',
              opacity: isTitleInView ? 1 : 0,
              letterSpacing: isTitleInView ? '0.05em' : '0.3em',
            }}
          >
            RECENT PROJECTS
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-100 max-w-2xl">
            &quot;A curated selection of work that blends clean code, performance, and anime-inspired aesthetics.&quot;
          </p>
        </div>

        {/* scroll hint for desktop */}
        <div className="hidden md:flex items-center gap-2 mt-8 text-xs tracking-[0.25em] uppercase text-gray-400">
          <span className="h-px w-8 bg-gray-500" />
          Scroll horizontally to explore
        </div>
      </div>

      {/* Mobile View: Horizontal Carousel with active card effect */}
      <div className="md:hidden relative mt-10">
        <div
          ref={mobileScrollRef}
          className="overflow-x-auto snap-x snap-mandatory flex gap-6 pb-4 hide-scrollbar"
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
      <div className="hidden md:block relative mt-16">
        <div
          ref={desktopScrollRef}
          className="overflow-x-auto snap-x snap-mandatory flex gap-8 pb-6 hide-scrollbar"
        >
          {ProjectList.map((project, id) => (
            <div
              key={id}
              className="snap-center flex-shrink-0 w-full sm:p-10 lg:p-12 transition-transform duration-500 hover:-translate-y-4 hover:scale-[1.02] hover:rotate-[-0.5deg]"
            >
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
            className="absolute left-0 top-1/2 text-customRed text-2xl mr-2 z-10 transform translate-x-2 hover:translate-x-0 transition-transform"
          />
        )}
        {/* Conditionally render Next button */}
        {!isAtEnd && (
          <FaAnglesRight
            onClick={handleNext}
            className="absolute right-0 top-1/2 text-customRed text-2xl z-10 transform -translate-x-2 hover:translate-x-0 transition-transform"
          />
        )}
      </div>
    </div>
  );
};

export default Projects;
