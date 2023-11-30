import React from "react";
import { FaCoffee, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  const year = new Date();

  return (
    <>
      <footer
        className="w-full text-center p-6 bg-accent mt-4"
        style={{ backgroundColor: "#2c2c6c" }}
      >
        <div className="flex items-center justify-center mb-6">
          <a
            className="inline-block mx-2"
            href="https://facebook.com/barkatzx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-2xl text-blue-600" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://linkedin.com/in/barkatzx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl text-blue-400" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://www.github.com/barkatzx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl text-black" />
          </a>
          <a
            className="inline-block mx-2"
            href="https://www.buymeacoffee.com/barkatzx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCoffee className="text-2xl text-yellow-500" />
          </a>
        </div>
        <div className="hidden  md:flex items-center justify-center mb-6 flex-wrap">
          <a
            className="text-xl font-semibold inline-bloc mx-6 text-white"
            href="https://www.fiverr.com/barkatzx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fiverr
          </a>
          <a
            className="text-xl font-semibold inline-bloc mx-6 text-white"
            href="https://www.upwork.com/freelancers/~010da490f5342b9c72"
            target="_blank"
            rel="noopener noreferrer"
          >
            UpWork
          </a>
          <a
            className="text-xl font-semibold inline-bloc mx-6 text-white"
            href="https://www.freelancer.com/u/barkatullahdev"
            target="_blank"
            rel="noopener noreferrer"
          >
            Freelancer
          </a>
          <a
            className="text-xl font-semibold inline-bloc mx-6 text-white"
            href="https://www.buymeacoffee.com/barkatzx"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy me a Coffee
          </a>
          <a
            className="text-xl font-semibold inline-bloc mx-6 text-white"
            href="https://drive.google.com/file/d/1VXr1NADGi3N8t8CbbbEb4B_i0cVKjL40/view"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        <div className="w-full h-[2px] bg-gray-600"></div>
        <div className="flex flex-col md:flex-row items-center justify-between mt-4">
          <p>&copy; Copyright All Rights Reserved {year.getFullYear()}</p>
          <p>
            Developed by{" "}
            <a
              href="https://linkedin.com/in/barkatzx"
              className="text-primary hover:underline"
              target="blank"
            >
              Barkat Ullah
            </a>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
