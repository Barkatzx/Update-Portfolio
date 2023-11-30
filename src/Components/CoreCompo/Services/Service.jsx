import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { BiPalette } from "react-icons/bi";
import { DiAtom } from "react-icons/di";
import { FiServer } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../Hooks/useAnimation";
import { BottomLine } from "../../Atoms/allAtoms";

const Service = () => {
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const services = [
    {
      id: 1,
      title: "Front End Development",
      icon: <BiPalette /> ,
      description:
        "My expertise in frontend development spans a wide array of technologies and frameworks, including HTML, CSS, and JavaScript. I harness the power of modern libraries and frameworks like React to create dynamic and responsive user interfaces that adapt to various devices and screen sizes.",
    },
    {
      id: 2,
      title: "MERN Development",
      icon: <DiAtom />,
      description:
        "The cornerstone of my web development expertise, and I'm passionate about crafting dynamic, responsive, and feature-rich web applications. The MERN stack, which comprises MongoDB, Express.js, React, and Node.js, is my toolkit of choice for building cutting-edge web solutions.",
    },
    {
      id: 3,
      title: "Backend Development",
      icon: <FiServer />,
      description:
      "My expertise encompasses a wide range of technologies and frameworks, ensuring that your application runs smoothly and securely. I work with databases like MongoDB, and others, tailoring the choice to the specific needs of your project. For building APIs and routing, I leverage frameworks like Express.js, and more, allowing for clean and organized communication between the client and server.",
    },
  ];
  return (
    <div className="container mx-auto mt-10"
    // style={{ backgroundColor: "#313131" }}
    >
      <motion.div
        className="mb-12"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center">What I Provide</h3>
        <h1 className="text-4xl font-semibold text-center">
          My Services
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        {services?.map((service) => (
          <div
            key={service.id}
            className={`${service.id % 2 === 0
              ? "bg-accent shadow-lg"
              : "bg-[#2c2c6c] shadow-md"
              } rounded-lg p-6 hover:shadow-primary cursor-pointer duration-300`}
          >
            <div className="mb-4 text-center">
              <span className="inline-block text-5xl text-primary">
                {service.icon}
              </span>
            </div>
            <h2 className="mb-4 text-3xl font-semibold text-center">
              {service.title}
            </h2>
            <p className="text-xl font-normal">{service.description}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Service;
