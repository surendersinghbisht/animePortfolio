import React, { useState } from 'react';
import Navbar from '../components/NavBar';
import Loading from './LoadingPage'

const Home = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div id="home" className="fixed inset-0 z-0">
      <Navbar />
      {/* Loading overlay */}
      {!videoLoaded && (
        <Loading />
      )}
      <video
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setVideoLoaded(true)}
        className={`object-cover w-full h-full transition-opacity duration-500 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src="./videos/goku.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Translucent overlay */}
      <div
        className={`absolute inset-0 bg-black/55 transition-opacity duration-500 ${
          videoLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
    </div>
  );
};

export default Home;
