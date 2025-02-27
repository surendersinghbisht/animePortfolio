import React from 'react';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import Contact from './Contact';
import NavBar from '../components/NavBar';

const Goku = () => {
  return (
    <div id='home' className="relative overflow-x-hidden">
      <NavBar />
      <Home />
      <div className="relative z-10 ">
        <div className="min-h-screen p-6 flex flex-col items-center justify-center text-white gap-4 text-center" id="home">
          <h1 className="text-7xl font-heading sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl">
            EAT.<span className="text-customOrange">CODE</span>.SLEEP
          </h1>
          <h2 className="text-2xl font-semibold sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl">
            WELCOME TO MY PORTFOLIO
          </h2>
          <p className=" text-sm sm:text-sm md:text-md lg:text-lg xl:text-lg leading-tight max-w-lg mx-auto font-title">
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
