import React, { useEffect, useState } from 'react';
import { FaDownload, FaHome } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";
import { ImBlog } from "react-icons/im";
import { MdWork } from "react-icons/md";
import {
    RiContactsBook2Fill,
    RiFolderInfoFill,
    RiMenu3Fill,
} from "react-icons/ri";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Link, NavLink } from 'react-router-dom';
import "../../../Pages/Shared/Shared.css";
import { PrimaryBtn } from '../../Atoms/allAtoms';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };

    const navLinks = [
        {
            title: "Home", link: "/", icon: <FaHome/>
        },
        {
            title: "About", link: "/about", icon: <RiFolderInfoFill/>
        },
        {
            title: "Project", link: "/project", icon: <MdWork/>
        },
        {
            title: "Contact", link: "/contact", icon: <RiContactsBook2Fill/>
        },
        {
            title: "Blog", link: "/blog", icon: <ImBlog/>
        }
    ];

    const activeLink = ({ isActive }) => {
        return {
            fontWeight: 600,
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
                setLastScrollY(window.scrollY)
            }
        };

        if (typeof window !== "undefined") {
            window.addEventListener("scroll", controlNavbar);
            return () => {
                window.removeEventListener("scroll", controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <div className={`visible ${show && "nav-hidden"} bg-[#1f1f38] z-50`}>
            <div className='w-full flex items-center justify-between  md:px-20'>
            <div>
                <Link to ="/">
                    <img className='h-64' src="https://i.ibb.co/j6JxPtk/Logo-Barkat-removebg-preview.png" alt="Barkat"/>
                </Link>
            </div>
            <div>
                <ul className='lg:flex items-center hidden'>
                {navLinks.map((navItem) => (
                    <li className='mx-4' key={navItem.title}>
                    <NavLink to ={navItem.link}
                    style={activeLink}
                    className="text-white hover:text-primary duration-300 inline-flex gap-2 items-center">
                       {navItem.icon} {navItem.title}
                    </NavLink>
                    </li>
                ))}

                <a className='ml-6' href='https://drive.google.com/file/d/1VXr1NADGi3N8t8CbbbEb4B_i0cVKjL40/view'
                target='blank'>
                    <PrimaryBtn>
                        <FaDownload/> Resume
                        </PrimaryBtn>
                </a>
                </ul>

                <div className='block lg:hidden'>
                    <button onClick={toggleDrawer} className='btn btn-ghost text-white'>
                    <RiMenu3Fill/>
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
                      className="flex items-center text-white hover:text-primary duration-300"
                    >
                      <span className="mr-3">{navItem.icon}</span>
                      <span>{navItem.title}</span>
                    </NavLink>
                  </li>
                ))}
                <li className="text-center m-4">
                  <a
                    className="inline-block w-full"
                    href="https://drive.google.com/file/d/19rnbukAhf9oPhadMhsvI3xnWF6FIYeMT/view?usp=share_link"
                    target="blank"
                  >
                    <button className="primary-button w-full text-white">
                      <span>Resume</span>
                      <span>
                        <FaDownload />
                      </span>
                    </button>
                  </a>
                </li>
                </ul>
                <div className="text-center">
                <p className="text-neutral">
                  &copy; Copyright 2023, Barkat Ullah. All Rights Reserved
                </p>
              </div>
                </Drawer>
                </div>
            </div>
            </div>
        </div>
    );
};

export default NavBar;