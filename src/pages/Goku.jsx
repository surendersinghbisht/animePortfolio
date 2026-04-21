import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import NavBar from '../components/NavBar';
import Bot from '../Bot';

gsap.registerPlugin(ScrollTrigger);

const Goku = ({ onVideoLoaded }) => {
  const [scrollY, setScrollY] = useState(0);
  const titleRef = useRef(null);
  const mobileEatRef = useRef(null);
  const mobileCodeRef = useRef(null);
  const mobileSleepRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // GSAP Scroll Animations
  useEffect(() => {
    // Desktop title animation
    if (titleRef.current) {
      gsap.to(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          markers: false,
        },
        opacity: 0.5,
        y: -50,
        duration: 1,
      });
    }

    // Mobile animations
    if (mobileEatRef.current) {
      gsap.to(mobileEatRef.current, {
        scrollTrigger: {
          trigger: mobileEatRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        x: 30,
        opacity: 0.7,
        duration: 1,
      });
    }

    if (mobileCodeRef.current) {
      gsap.to(mobileCodeRef.current, {
        scrollTrigger: {
          trigger: mobileCodeRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        x: -30,
        opacity: 0.7,
        duration: 1,
      });
    }

    if (mobileSleepRef.current) {
      gsap.to(mobileSleepRef.current, {
        scrollTrigger: {
          trigger: mobileSleepRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        x: 30,
        opacity: 0.7,
        duration: 1,
      });
    }

    // Subtitle fade-in animation
    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        {
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 80%',
            end: 'top 50%',
            scrub: 1,
          },
          opacity: 1,
          y: 0,
          duration: 1,
        }
      );
    }

    // Description fade-in animation
    if (descriptionRef.current) {
      gsap.fromTo(
        descriptionRef.current,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: descriptionRef.current,
            start: 'top 85%',
            end: 'top 55%',
            scrub: 1,
          },
          opacity: 1,
          y: 0,
          duration: 1,
        }
      );
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
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
            ref={titleRef}
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
              ref={mobileEatRef}
              style={{
                transform: `translateX(${scrollY * 0.6}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              EAT
            </span>
            <span
              ref={mobileCodeRef}
              className="text-customRed"
              style={{
                transform: `translateX(${scrollY * -0.6}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              CODE
            </span>
            <span
              ref={mobileSleepRef}
              style={{
                transform: `translateX(${scrollY * 0.6}px)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              SLEEP
            </span>
          </h1>
          <h2 ref={subtitleRef} className="text-2xl font-custom  sm:text-md md:text-xl lg:text-2xl xl:text-3xl">
            WELCOME TO MY PORTFOLIO
          </h2>
          <p ref={descriptionRef} className="text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg font-custom2 leading-tight max-w-lg mx-auto">
            A code-crafting problem solver, passionate about building intuitive software experiences with clean code and cutting-edge technologies.
          </p>
        </div>
        <Projects />
        <About />
        <Contact />
      </div>
      <Bot />
    </div>
  );
};

export default Goku;
