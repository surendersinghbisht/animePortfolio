import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: 'home' },
    { name: 'Projects', to: 'projects' },
    { name: 'About', to: 'about' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent font-heading">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <img
          src="/images/pngwing.com.png"
          alt="Logo"
          className="h-8 md:h-10"
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-20">
          {navLinks.map(link => (
            <a
              key={link.to}
              href={`#${link.to}`}
              className="text-white hover:text-customOrange transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(true)} 
            className="text-white focus:outline-none"
          >
            <FaBars size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Slider */}
      <div
        className={`fixed inset-0 z-50 bg-black transform transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col items-center justify-center h-full">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-customOrange focus:outline-none"
          >
            <FaTimes size={28} />
          </button>
          <ul className="space-y-8">
            {navLinks.map(link => (
              <li key={link.to}>
                <a
                  href={`#${link.to}`}
                  onClick={() => setIsOpen(false)}
                  className="text-customOrange text-3xl md:text-4xl font-bold hover:text-white transition-colors"
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
