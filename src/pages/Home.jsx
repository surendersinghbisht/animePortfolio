import React, { useState } from 'react';
import Navbar from '../components/NavBar';

const Home = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative">
      {/* Full-screen loader: visible until video is loaded */}
      {!videoLoaded && (
        <div className="bg-customOrange h-screen flex items-center justify-center absolute inset-0 z-50">
          <img src="/images/loading.gif" alt="Loading..." className="w-48" />
        </div>
      )}

      {/* Home Content: hidden until videoLoaded is true */}
      <div id="home" className={`fixed inset-0 z-0 ${videoLoaded ? '' : 'opacity-0'}`}>
        <Navbar />
        <video
          autoPlay
          loop
          muted
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className="object-cover w-full h-full transition-opacity duration-500"
        >
          <source src="./videos/goku.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/55 transition-opacity duration-500"></div>
      </div>
    </div>
  );
};

export default Home;
