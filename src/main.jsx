import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; // Import BrowserRouter from 'react-router-dom'
import BlogDetails from './Components/CoreCompo/BlogDetails/BlogDetails';
import ProjectDetails from './Components/CoreCompo/ProjectDetails/ProjectsDetails';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/project",
    element: <Projects/>,
  },
  {
    path: "/project/:id",
    element: <ProjectDetails/>,
  },
  {
    path: "/blog",
    element: <Blog/>,
  },
  {
    path: ":blog_path",
    element: <BlogDetails/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  }
]);

const rootElement = document.getElementById('root');

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
