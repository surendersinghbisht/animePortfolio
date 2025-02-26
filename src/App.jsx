import { Suspense, useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProjectDetailPage from './pages/ProjectDetailPage';
import Goku from './pages/Goku';
import LoadingPage from './pages/LoadingPage';
import CustomCursor from './components/CustomCursor';

const Loading = () => {
  return <LoadingPage />
};

const App = () => {
  const [pageLoaded, setPageLoaded] = useState(false);

  useEffect(() => {
    // Function to update pageLoaded when everything is loaded
    const handleLoad = () => setPageLoaded(true);
    
    // Add event listener for window load event
    window.addEventListener('load', handleLoad);
    
    // Check if document is already complete (useful in some cases)
    if (document.readyState === 'complete') {
      setPageLoaded(true);
    }
    
    return () => window.removeEventListener('load', handleLoad);
  }, []);

  // While the page is not fully loaded, render the loader
  if (!pageLoaded) {
    return <Loading />;
  }

  return (
    <Suspense fallback={<Loading />}>
      <CustomCursor />
      <Routes>
        <Route path="/details/:id" element={<ProjectDetailPage />} />
        <Route path="/" element={<Goku />} />
      </Routes>
    </Suspense>
  );
};

export default App;
