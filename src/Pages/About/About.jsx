import { motion } from "framer-motion";
import React from "react";
import { FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { BottomLine } from "../../Components/Atoms/allAtoms";
import Certificate from "../../Components/CoreCompo/Certificate/Certificate";
import Education from "../../Components/CoreCompo/Education/Education";
import MySkill from "../../Components/CoreCompo/MySkill/MySkill";
import "../Shared/Shared.css";
import "./About.css";

const About = () => {
  return (
      <div className="parent py-10 pt-10">
  <div className="">
    <motion.div
      className="mb-10"
      initial={{ y: -200, opacity: 0 }}
      animate={{
        y: 0,
        opacity: 1,
        transition: { duration: 1, type: "spring" },
      }}
    >
      <h3 className="text-center">Something About Myself</h3>
      <h1 className="text-4xl font-semibold drop-shadow-md text-center">
        About Me
      </h1>
      <BottomLine />
    </motion.div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 1, delay: 1.25 },
        }}
      >
        <div class="relative w-full h-full overflow-hidden rounded-full shadow-2xl">
  <img
    src="https://i.ibb.co/wWtS66N/1701183840759-removebg-preview.png"
    alt="Barkat Ullah"
    class="object-cover w-full h-full rounded-full"
    title="Barkat Ullah"
  />
</div>

      </motion.div>
      <motion.div
        className=""
        initial={{ x: 200, opacity: 0 }}
        animate={{
          x: 0,
          opacity: 1,
          transition: { duration: 1, delay: 1.25 },
        }}
      >
        <h1 className="text-4xl font-semibold mb-4 text-center sm:text-3xl sm:mb-2 md:text-left uppercase">Barkat Ullah</h1>
        <div className="my-8">
          <TypeAnimation
            className="text-2xl text-primary font-bold text-center sm:text-2xl sm:mb-2 md:text-left"
            cursor={true}
            sequence={[
              "A MERN-Stack Developer",
              2000,
              "A Full-Stack Developer",
              2000,
              "A Front-End Developer",
              2000
            ]}
            wrapper="div"
            repeat={Infinity}
          />
        </div>
        <p className="font-medium text-2xl text-center sm:mb-2 md:text-left">
          As a MERN stack developer, I am committed to building high-quality
          web applications that meet the needs of my clients. With years of
          experience in full-stack web development, I specialize in using
          React.js, Next.js, Typescript, MongoDB, Express.js, and Node.js to
          create scalable and robust web applications. Dedicated Front-end developer. Capable to solve working problems. Passionate about learning & development to reach the target. Eager to tackle more complex problems and continue to find ways to maximize user efficiency.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-3 gap-y-4 mt-4 text-center sm:mb-2 md:text-left text-2xl">
          <h2 className="font-medium">
            <span className="mr-2 text-primary">Name : </span>Barkat Ullah
          </h2>
          <h2 className="font-medium">
            <span className="mr-2 text-primary">Phone : </span>+880 1989 190 199
          </h2>
          <h2 className="font-medium">
            <span className="mr-2 text-primary">Email : </span>
            barkatullah.zx@gmail.com
          </h2>
          <h2 className="font-medium">
            <span className="mr-2 text-primary">Address : </span>Dhaka, Bangladesh
          </h2>
          <a
            href="https://drive.google.com/file/d/1VXr1NADGi3N8t8CbbbEb4B_i0cVKjL40/view"
            target="blank"
          >
            <div className="flex justify-center md:justify-start">
              <button className="primary-button">
                <span>My Resume</span>
                <span>
                  <FaDownload />
                </span>
              </button>
            </div>
          </a>
        </div>
      </motion.div>
    </div>
  </div>

  {/* My Skill */}
  <MySkill />

  {/* Education */}
  <Education />
  {/* Achivements and Certificate */}
  <Certificate/>
</div>
  );
};

export default About;
