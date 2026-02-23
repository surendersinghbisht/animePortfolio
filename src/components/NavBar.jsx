import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { HiMiniBars3BottomRight } from "react-icons/hi2"

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Projects', to: 'projects' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 font-custom bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-customRed via-customOrange to-customRed flex items-center justify-center shadow-[0_0_25px_rgba(188,0,45,0.8)]">
            <img
              src="/images/star.png"
              alt="Logo"
              className="h-5 w-5 object-contain"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-[10px] uppercase tracking-[0.25em] text-gray-400">
              Portfolio
            </span>
            <span className="text-sm text-white font-semibold">
              Surender Singh
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 rounded-full bg-white/5 border border-white/10 backdrop-blur-md px-5 py-2 shadow-[0_0_20px_rgba(0,0,0,0.6)]">
          {navLinks.map(link => (
            <a
              key={link.to}
              href={`#${link.to}`}
              className="group relative text-sm text-gray-200 hover:text-white transition-colors px-2 py-1"
            >
              <span>{link.name}</span>
              <span className="pointer-events-none absolute left-1/2 -translate-x-1/2 -bottom-1 h-[2px] w-0 bg-customRed transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(true)} 
            className="text-white focus:outline-none"
          >
            <HiMiniBars3BottomRight size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Slider */}
      <div
        className={`fixed inset-0 z-50 bg-black/90 backdrop-blur-2xl transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col items-center justify-center h-full px-6">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 text-customRed focus:outline-none"
          >
            <FaTimes size={30} />
          </button>
          <ul className="space-y-6 w-full max-w-xs">
            {navLinks.map(link => (
              <li key={link.to}>
                <a
                  href={`#${link.to}`}
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center text-xl font-semibold text-white py-3 rounded-full bg-white/5 border border-white/10 hover:border-customRed hover:bg-customRed/20 transition-all duration-300"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
