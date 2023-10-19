import { Suspense } from 'react';
import { Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Loader, ScrollToTop } from './Components/Atoms/allAtoms';
import NavBar from './Components/CoreCompo/NavBar/NavBar';

function App() {
  const location = useLocation();
  const isFalse = location.pathname.includes("404");

  return (
    <>
      <ScrollToTop/>
      {isFalse || <NavBar/>}
      <Suspense fallback={<Loader/>}>
        <Routes>
          
        </Routes>
      </Suspense>
    </>
  )
}

export default App;
