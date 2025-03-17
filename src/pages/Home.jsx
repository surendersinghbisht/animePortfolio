import React, { useState } from 'react';

const Home = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="fixed inset-0 z-0">
      {/* Video element: Initially hidden until loaded */}
      <video
        autoPlay
        loop
        muted
        playsInline
        onCanPlayThrough={() => setLoaded(true)}
        className={`object-cover w-full h-full transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <source src="/videos/gokubackground.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Translucent overlay on video */}
      <div
        className={`absolute inset-0 bg-black/55 transition-opacity duration-500 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      ></div>
    </div>
  );
};

export default Home;
