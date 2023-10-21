import { Suspense } from "react";
import { useLocation } from "react-router-dom";
import { Loader, ScrollToTop } from "./Components/Atoms/allAtoms";
import Footer from "./Components/CoreCompo/Footer/Footer";
import NavBar from "./Components/CoreCompo/NavBar/NavBar";
import Home from "./Pages/Home/Home";
function App() {
  const location = useLocation();
  const isFalse = location.pathname.includes("404");
  return (
    <>
      <ScrollToTop />
      {isFalse || <NavBar />}
      <Suspense fallback={<Loader />}>
        <Home/>
      </Suspense>
      {isFalse || <Footer />}
    </>
  );
}

export default App;