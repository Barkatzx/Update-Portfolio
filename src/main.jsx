import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'; // Import BrowserRouter from 'react-router-dom'
import Home from './Pages/Home/Home';
import './index.css';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
  },
]);

const rootElement = document.getElementById('root');

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
