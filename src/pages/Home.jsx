import React from 'react';

const Home = ({ onVideoLoaded }) => {
  return (
    <div className="fixed inset-0 z-0">
      <video
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={onVideoLoaded}
        className="object-cover w-full h-full transition-opacity duration-500"
      >
        <source src="/videos/goku.mp4" type="video/mp4" />
        {/* Fallback text if the video tag is not supported */}
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black/55"></div>
    </div>
  );
};

export default Home;
