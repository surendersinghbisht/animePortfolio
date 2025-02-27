import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Goku from './pages/Goku';
import ProjectDetailPage from './pages/ProjectDetailPage';
import LoadingPage from './pages/LoadingPage';
import CustomCursor from './components/CustomCursor';

const App = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <div className="relative">
      <CustomCursor />
      {/* If the Home video is not loaded, display the full-screen loader */}
      {!videoLoaded && <LoadingPage />}
      <Routes>
        <Route path="/" element={<Goku onVideoLoaded={() => setVideoLoaded(true)} />} />
        <Route path="/details/:id" element={<ProjectDetailPage />} />
      </Routes>
    </div>
  );
};

export default App;
