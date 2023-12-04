import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import BlogDetails from './Components/CoreCompo/BlogDetails/BlogDetails';
import BlogIndex from './Components/CoreCompo/BlogIndex/BlogIndex';
import NotFound from './Components/CoreCompo/NotFound/NotFound';
import ProjectDetails from './Components/CoreCompo/ProjectDetails/ProjectsDetails';
import AddBlog from './Components/DashBoard/AddBlog';
import AddProjects from './Components/DashBoard/AddProjects';
import AddReview from './Components/DashBoard/AddReview';
import DashBoard from './Components/DashBoard/DashBoard';
import Home from './Layout/Home/Home';
import Main from './Layout/Home/Main';
import About from './Pages/About/About';
import Blog from './Pages/Blog/Blog';
import Contact from './Pages/Contact/Contact';
import LodingSpinner from './Pages/Loader/LodingSpinner';
import Login from './Pages/Login/Login';
import AllProject from './Pages/Projects/AllProject';
import AuthProvider from './Provider/AuthProvider';
import PrivateRoute from './Provider/PrivateRoute';
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <NotFound/>,
    children: [
      {
        path:"/",
        element:<Home/>
      },
      {
        path: "/project",
        element: <AllProject/>,
      },
      {
        path: "/project/:id",
        element: <ProjectDetails/>,
      },
      {
        path: "/blogs",
        element: <Blog/>,
        children: [
          {
            index: true,
            element: <BlogIndex/>,
          },
          {
            path: "/blogs/:id",
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
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/dash",
        element: <PrivateRoute>
          <DashBoard/>
        </PrivateRoute>,
        children: [
          {
            path: "/dash/addprojects",
            element: <AddProjects/>
          },
          {
            path: "/dash/addblogs",
            element: <AddBlog/>
          },
          {
            path: "/dash/addreview",
            element: <AddReview/>
          },
        ]
      },
      {
        path: 'loder',
        element: <LodingSpinner/>,
      }
    ]
  },
]);

const rootElement = document.getElementById('root');

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
