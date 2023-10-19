import { motion } from "framer-motion";
import React from "react";
import { FaDownload } from "react-icons/fa";
import { RiFolderInfoFill } from "react-icons/ri";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import "../../../Components/Atoms/SecondaryBtn/SecondaryBtn";
import SecondaryBtn from "../../../Components/Atoms/SecondaryBtn/SecondaryBtn";
import "../../../Pages/Shared/Shared.css";
import coding from "../../../assets/Coding.json";
import "../../Atoms/PrimaryBtn/PrimaryBtn.css";

const Banner = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: coding,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="parent min-h-[100vh] flex flex-col-reverse lg:flex-row items-center justify-between">
      <motion.div
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-neutral text-xl font-medium translate-y-[-90%] sm:translate-y-[-0%]">Hello, I'm</h2>
        <h1 className="text-4xl font-semibold mb-0 translate-y-[-50%] sm:translate-y-[-0%]">Barkat Ullah</h1>
        <div className="my-4">
          <TypeAnimation
            className="text-2xl text-primary font-bold translate-y-[-80%] sm:translate-y-[-0%]"
            cursor={true}
            sequence={[
              "A MERN Stack Developer",
              2000,
              "A Full-Stack Developer",
              2000,
              "A Front-End Developer",
              2000,
              2000,
              "A Web Developer",
              2000,
            ]}
            wrapper="div"
            repeat={Infinity}
          />
        </div>
        <p className="text-neutral max-w-xl mb-6 font-medium translate-y-[-20%] sm:translate-y-[-0%]">
          As a MERN stack developer, I am committed to building high-quality web
          applications that meet the needs of my clients. With years of
          experience in full-stack web development, I specialize in using
          React.js, Next js, Typescript, MongoDB, Express.js, and Node.js to
          create scalable and robust web applications.
          {/* I am a Front-end Developer. I am very passionate to my work and
          dedicated to explore New Tools And Technologies. */}
        </p>

        <div className="flex items-center translate-y-[-60%] sm:translate-y-[-0%]">
          <a
            href="https://drive.google.com/file/d/1eYr9ajgWpnx7lT5X1lPFFizoY_BdAOyK/view?usp=sharing"
            target="blank"
          >
            <button className="primary-button">
              <span>My Resume</span>
              <span>
                <FaDownload />
              </span>
            </button>
          </a>
          <Link to="/about" className="ml-4">
            <SecondaryBtn>
              <span>About Me</span>
              <span>
                <RiFolderInfoFill />
              </span>
            </SecondaryBtn>
          </Link>
        </div>
      </motion.div>
      <motion.div
        className="w-full md:w-1/2"
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1 }}
      >
        <Lottie options={defaultOptions} height="90%" width="90%" />
      </motion.div>
    </div>
  );
};

export default Banner;
