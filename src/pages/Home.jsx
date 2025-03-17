import React, { useState, useEffect } from 'react';

const Home = ({ onVideoLoaded }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (loaded && onVideoLoaded) {
      onVideoLoaded(); // Notify parent that the video is loaded
    }
  }, [loaded, onVideoLoaded]);

  return (
    <div className="fixed inset-0 z-0">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setLoaded(true)} // Fires when enough data is loaded to play
        className={`object-cover w-full h-full transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src="/videos/gokubackground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Dark Overlay */}
      <div
        className={`absolute inset-0 bg-black/50 transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
    </div>
  );
};

export default Home;
