import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; // Import BrowserRouter from 'react-router-dom'
import ProjectDetails from './Components/CoreCompo/ProjectDetails/ProjectsDetails';
import Blog from './Pages/Blog/Blog';
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
  }
]);

const rootElement = document.getElementById('root');

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
