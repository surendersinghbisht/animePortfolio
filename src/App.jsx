import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Goku from './pages/Goku';
import CustomCursor from './components/CustomCursor';
import ProjectDetailPage from './pages/ProjectDetailPage';

const App = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const location = useLocation();

  // Only show loader on the home route
  const showLoader = !videoLoaded && location.pathname === "/";

  return (
    <div className="relative">
      <CustomCursor />
      {showLoader && (
        <div className="fixed inset-0 z-100 bg-customOrange flex items-center justify-center">
          <img src="/images/loading.gif" alt="Loading..." className="w-48" />
        </div>
      )}

      <Routes>
        <Route path="/" element={<Goku onVideoLoaded={() => setVideoLoaded(true)} />} />
        <Route path="/details/:id" element={<ProjectDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
