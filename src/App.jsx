import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Goku from './pages/Goku';
import ProjectDetailPage from './pages/ProjectDetailPage';
import LoadingPage from './pages/LoadingPage';
import CustomCursor from './components/CustomCursor'

const App = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Create a hidden video element to preload the video
    const video = document.createElement('video');
    video.src = '/videos/gokubackground.mp4'; // path to your Home video
    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    // When the video data is loaded, update state.
    video.onloadeddata = () => setVideoLoaded(true);
    // Start loading the video.
    video.load();
  }, []);

  // Until the video is loaded, render only the LoadingPage.
  if (!videoLoaded) {
    return <LoadingPage />;
  }

  return (
    <>
    <CustomCursor />
    <Routes>
      <Route path="/" element={<Goku />} />
      <Route path="/details/:id" element={<ProjectDetailPage />} />
    </Routes>
    </>
  );
};

export default App;
