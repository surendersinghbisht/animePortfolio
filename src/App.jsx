import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ProjectDetailPage from './pages/ProjectDetailPage';
import Goku from './pages/Goku';
import ClipLoader from 'react-spinners/ClipLoader'; // import loading spinner

const Loading = () => {
  return (
    <div className="loading-container">
      <ClipLoader color="#36d7b7" loading={true} size={150} />
      <p>Loading...</p>
    </div>
  );
};

const App = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path='/details/:id' element={<ProjectDetailPage />} />
        <Route path='/' element={<Goku />} />
      </Routes>
    </Suspense>
  );
};

export default App;
