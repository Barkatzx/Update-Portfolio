import React, { useContext, useEffect, useState } from 'react';
import { FaDownload, FaUserCircle } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";
import { RiMenu3Fill } from "react-icons/ri";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2'; // Import Swal
import "../../../Pages/Shared/Shared.css";
import { AuthContext } from '../../../Provider/AuthProvider';
import { PrimaryBtn } from '../../Atoms/allAtoms';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const navLinks = [
    { title: "Home", link: "/" },
    { title: "About", link: "/about" },
    { title: "Project", link: "/project" },
    { title: "Contact", link: "/contact" },
    { title: "Blog", link: "/blogs" },
  ];

  const activeLink = ({ isActive }) => {
    return {
      fontWeight: 800,
      color: isActive && "#4db5ff",
    };
  };

  // Show Navbar and ScrollUp
  const [show, setShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY > lastScrollY) {
          setShow(true);
        } else {
          setShow(false);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  const authContext = useContext(AuthContext);
  const user = authContext?.user;
  const logOut = authContext?.logOut;

  const handleSignOut = async () => {
    try {
      await logOut();
      Swal.fire({
        icon: "success",
        title: "Logged Out",
        text: "You have been successfully logged out.",
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Logout Failed",
        text: "Failed to log out. Please try again.",
      });
    }
  };

  return (
    <div className={`visible ${show && "nav-hidden"} bg-[#1f1f38] z-50`}>
      <div className='w-full flex items-center justify-between md:px-16'>
        <div>
            <img className='h-60' src="https://i.ibb.co/j6JxPtk/Logo-Barkat-removebg-preview.png" alt="Barkat" />
        </div>
        <div>
          <ul className='lg:flex items-center hidden'>
            {navLinks.map((navItem) => (
              <li className='mx-4' key={navItem.title}>
                <NavLink to={navItem.link}
                  style={activeLink}
                  className="text-white hover:text-primary duration-300 inline-flex gap-2 items-center uppercase">{navItem.title}
                </NavLink>
              </li>
            ))}
          <a className='ml-10' href='https://drive.google.com/file/d/1VXr1NADGi3N8t8CbbbEb4B_i0cVKjL40/view'
            target='_blank'>
            <PrimaryBtn>Resume
            </PrimaryBtn>
          </a>
            {/* Logged User */}
            {user && (
              <Link
                to="/dash"
                className="text-white hover:text-primary duration-300 inline-flex gap-2 items-center uppercase font-bold pl-10"
              >Dash
              </Link>
            )}
            </ul>
          </div>
          <div className="flex flex-col md:flex-row md:items-center justify-center gap-5 mt-4 md:mt-0">
  {user ? (
    <>
      <button
        className="bg-blue-500 text-white py-1 px-2 rounded-xl hover:bg-blue-600 font-bold lg:visible invisible"
        onClick={handleSignOut}
      >
        Logout
      </button>
      <span className="">
        <label
          htmlFor="menu-toggle"
          tabIndex={0}
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="rounded-full overflow-hidden w-12 lg:visible invisible">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="UserImage"
                title={user.displayName}
                className="w-full h-full object-cover"
              />
            ) : (
              <FaUserCircle className="text-2xl" />
            )}
          </div>
        </label>
      </span>
    </>
  ) : null}
</div>

          {/* Logged User End */}
        <div className='block lg:hidden'>
          <button onClick={toggleDrawer} className='btn btn-ghost text-white'>
            <RiMenu3Fill />
          </button>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            style={{
              backgroundColor: "#212121"
            }}
            className="bla bla bla flex flex-col justify-between pb-4">
            <ul className=''>
              <li className='mt-6 mb-10 ml-4'>
                <GiCrossMark className='cursor-pointer hover:text-primary duration-300'
                  onClick={() => setIsOpen(!isOpen)}>
                </GiCrossMark>
              </li>
              {navLinks.map((navItem) => (
                <li
                  className="m-4"
                  key={navItem.title}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <NavLink
                    to={navItem.link}
                    style={activeLink}
                    className="flex items-center text-white hover:text-primary duration-300 uppercase"
                  >{navItem.title}
                  </NavLink>
                </li>
              ))}
              <li className="text-center m-4">
                <a
                  className="inline-block w-full"
                  href="https://drive.google.com/file/d/19rnbukAhf9oPhadMhsvI3xnWF6FIYeMT/view?usp=share_link"
                  target="_blank"
                >
                  <button className="primary-button w-full text-white">
                    <span>Resume</span>
                    <span>
                      <FaDownload />
                    </span>
                  </button>
                </a>
              </li>
                          {/* Logged User */}
            {user && (
              <Link
                to="/dash"
                className="text-white hover:text-primary duration-300 inline-flex gap-2 items-center uppercase font-bold ml-4"
              >Dash
              </Link>
            )}
          <div className="flex flex-col md:flex-row md:items-center justify-center gap-5 mt-4 md:mt-0">
  {user ? (
    <>
      <button
        className="primary-button text-white"
        onClick={handleSignOut}
      >
        Logout
      </button>
      <span className="">
        <label
          htmlFor="menu-toggle"
          tabIndex={0}
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="rounded-full overflow-hidden w-12">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="UserImage"
                title={user.displayName}
                className="w-full h-full object-cover"
              />
            ) : (
              <FaUserCircle className="text-2xl" />
            )}
          </div>
        </label>
      </span>
    </>
  ) : null}
</div>
          {/* Logged User End */}
            </ul>
          </Drawer>
          
        </div>
      </div>
    </div>
  );
};

export default NavBar;
