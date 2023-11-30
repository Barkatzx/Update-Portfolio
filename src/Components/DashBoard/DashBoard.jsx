import React from 'react';
import { AiFillProject } from "react-icons/ai";
import { FaBlog } from "react-icons/fa";
import { SiCodereview } from "react-icons/si";
import { Link, Outlet } from 'react-router-dom';
const DashBoard = () => {
  const handleDrawerOpen = (event) => {
    // Prevent the checkbox from being toggled
    event.stopPropagation();
  };

  return (
    <div className='pt-20'>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet />
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden m-10"
            onClick={handleDrawerOpen}
          >
            Open Drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu w-80 min-h-full bg-slate-200 text-base-content rounded-xl text-xl font-bold">
          <div className="avatar justify-center pb-5">
            <div className="w-24 rounded-xl">
            <img src="https://i.ibb.co/jZR3GDx/Barkat.png" />
            </div>
          </div>
            {/* Sidebar content here */}
            <li>
              <Link to="/dash/addblogs"><FaBlog /> Write Blog</Link>
            </li>
            <li>
              <Link to="/dash/addprojects"><AiFillProject />
 Add Project</Link>
            </li>
            <li>
              <Link to="/dash/addreview"><SiCodereview />
 Add Review</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
