import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Goku from './pages/Goku';
import CustomCursor from './components/CustomCursor';

const App = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative">
      {/* Full-screen Loader Overlay */}
      <CustomCursor />
      {!videoLoaded && (
        <div className="fixed inset-0 z-50 bg-customOrange flex items-center justify-center">
          <img src="/images/loading.gif" alt="Loading..." className="w-48" />
        </div>
      )}
      
      {/* Main Content */}
      <Routes>
        <Route path="/" element={<Goku onVideoLoaded={() => setVideoLoaded(true)} />} />
        {/* Add other routes as needed */}
      </Routes>
    </div>
  );
};

export default App;
