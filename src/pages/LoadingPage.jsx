import React from 'react';

const LoadingPage = () => {
  return (
    <div className="bg-customOrange h-screen flex items-center justify-center">
      <img src="/images/loader.gif" alt="Loading..." className="w-48" />
      <h1 className='text-white font-heading'>Loading...</h1>
    </div>
  );
};

export default LoadingPage;
