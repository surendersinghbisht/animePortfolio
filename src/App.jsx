import React, { Suspense, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Goku from './pages/Goku'; 
import LoadingPage from './pages/LoadingPage';

const App = () => {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setPageLoaded(true);
    };

    window.addEventListener('load', handleLoad);


    if (document.readyState === 'complete') {
      setPageLoaded(true);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);
  
  if (!pageLoaded) {
    return <LoadingPage />;
  }

  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/" element={<Goku />} />
        {/* add other routes as needed */}
      </Routes>
    </Suspense>
  );
};

export default App;
