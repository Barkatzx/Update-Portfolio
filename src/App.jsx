import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Loader, ScrollToTop } from "./Components/Atoms/allAtoms";
import BlogDetails from "./Components/CoreCompo/BlogDetails/BlogDetails";
import BlogIndex from "./Components/CoreCompo/BlogIndex/BlogIndex";
import Footer from "./Components/CoreCompo/Footer/Footer";
import NavBar from "./Components/CoreCompo/NavBar/NavBar";
import NotFound from "./Components/CoreCompo/NotFound/NotFound";
import ProjectDetails from "./Components/CoreCompo/ProjectDetails/ProjectsDetails";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog/Blog";
import Contact from "./Pages/Contact/Contact";
import Home from "./Pages/Home/Home";
import Projects from "./Pages/Projects/Projects";

function App() {
  const location = useLocation();
  const isFalse = location.pathname.includes("404");
  return (
    <>
      <ScrollToTop />
      {isFalse || <NavBar />}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />}>
            <Route index element={<BlogIndex />} />
            <Route path=":blog_path" element={<BlogDetails />} />
          </Route>
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/404" />}></Route>
          {/* <Route path="/mern-blog" element={<MernBlogRepair />} />
          <Route path="/employee-salary-management" element={<EmployeeSalaryManagementRepair />} /> */}
        </Routes>
      </Suspense>
      {isFalse || <Footer />}
    </>
  );
}

export default App;