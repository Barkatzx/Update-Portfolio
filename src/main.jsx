import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App';
import BlogDetails from './Components/CoreCompo/BlogDetails/BlogDetails';
import BlogIndex from './Components/CoreCompo/BlogIndex/BlogIndex';
import NotFound from './Components/CoreCompo/NotFound/NotFound';
import ProjectDetails from './Components/CoreCompo/ProjectDetails/ProjectsDetails';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import Projects from './Pages/Projects/Projects';
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <NotFound/>,
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
    children: [
      {
        index: true,
        element: <BlogIndex/>,
      },
      {
        path: ":blog_path",
        element: <BlogDetails/>,
      }
    ]
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
