import React, { useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Goku from './pages/Goku';
import ProjectDetailPage from './pages/ProjectDetailPage';
import LoadingPage from './pages/LoadingPage';
import CustomCursor from './components/CustomCursor';

const App = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const location = useLocation();

  // Show loader only when on the home route and video is not loaded.
  const showLoader = location.pathname === "/" && !videoLoaded;

  return (
    <div className="relative">
      <CustomCursor />
      {showLoader && <LoadingPage />}
      <Routes>
        <Route path="/" element={<Goku onVideoLoaded={() => setVideoLoaded(true)} />} />
        <Route path="/details/:id" element={<ProjectDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
