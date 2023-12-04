import emailjs from "@emailjs/browser";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaLinkedin,
  FaLocationArrow,
  FaPhoneAlt,
  FaTwitterSquare,
  FaUserAlt
} from "react-icons/fa";
import { MdEmail, MdSend } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../../Components/Atoms/PrimaryBtn/PrimaryBtn";
import { BottomLine } from "../../Components/Atoms/allAtoms";
import { contactAnimation, headingAnimation } from "../../Hooks/useAnimation";
import "../Shared/Shared.css";
import "./Contact.css";

const Contact = () => {
  const navigate = useNavigate();
  const form = useRef();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const handleSend = (e) => {
    e.preventDefault();
    // emailjs
    //   .sendForm(
    //     "service_8fsflsg",
    //     "template_2hui968",
    //     form.current,
    //     "KDEwiqMW9T7dFKhtH"
    //   )
    emailjs.sendForm(
      import.meta.env.VITE_SERVICE_ID,
      import.meta.env.VITE_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_USER_ID
    )    
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Message has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="container mx-auto mt-10">
      <motion.div
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center">Feel Free To Contact Me</h3>
        <h1 className="text-4xl font-semibold drop-shadow-md text-center">
          Get In Touch
        </h1>
        <BottomLine />
      </motion.div>
      <div className="flex flex-col md:flex-row  justify-between mt-10 p-4">
        <motion.div
          className=""
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={contactAnimation}
        >
          <h2 className="text-2xl font-medium">Contact Me</h2>
          <form ref={form} onSubmit={handleSend}>
            <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
              <input
                className="input-field"
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
              />
              <input
                className="input-field"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <input
              className="input-field"
              type="text"
              name="subject"
              id="subject"
              placeholder="Subject"
              required
            />
            <textarea
              className="input-field"
              name="message"
              id="message"
              cols="30"
              rows="5"
              placeholder="Message"
              required
            ></textarea>
            <button
              type="submit"
              value="Send Message"
              className="primary-button"
            >
              <span>Send</span>
              <span><MdSend /></span>
            </button>
          </form>
        </motion.div>
        <motion.div
          className=""
          initial={{ y: 50, opacity: 0 }}
          animate={viewDiv && "visible"}
          variants={contactAnimation}
        >
          <h2 className="text-2xl font-medium">Contact Info</h2>
          <div className="flex items-center my-6">
            <FaUserAlt className="text-2xl mr-8 hover:text-primary cursor-pointer duration-300"></FaUserAlt>
            <h3 className="text-xl text-primary font-medium">Barkat Ullah</h3>
          </div>
          <div className="flex items-center my-6">
            <FaPhoneAlt className="text-2xl mr-8 hover:text-primary cursor-pointer duration-300"></FaPhoneAlt>
            <h3 className="text-xl font-medium text-primary">+880 1989 190 199</h3>
          </div>
          <div className="flex items-center my-6">
            <MdEmail className="text-3xl mr-8 hover:text-primary cursor-pointer duration-300"></MdEmail>
            <h3 className="text-xl font-medium text-primary">barkatullah.zx@gmail.com</h3>
          </div>
          <div className="flex items-center my-6">
            <FaLocationArrow className="text-2xl mr-8 hover:text-primary cursor-pointer duration-300"></FaLocationArrow>

            <h3 className="text-xl font-medium text-primary">
              Dhaka, Bangladesh
            </h3>
          </div>
          <div className="mt-8 flex items-center">
            <h3 className="text-xl ">Social</h3>
            <div className="bg-gray-400 w-10 h-[2px] mx-4"></div>
            <a
              href="https://linkedin.com/in/barkatzx"
              target="blank"
              className="text-3xl hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaLinkedin></FaLinkedin>
            </a>
            <a
              href="https://www.github.com/barkatzx"
              target="blank"
              className="text-3xl hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaGithubSquare></FaGithubSquare>
            </a>
            <a
              href="https://twitter.com/barkatzx"
              target="blank"
              className="text-3xl hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaTwitterSquare></FaTwitterSquare>
            </a>
            <a
              href="https://www.instagram.com/bethup97/"
              target="blank"
              className="text-3xl hover:text-primary hover:-translate-y-1.5 shadow-lg mx-1 duration-300"
            >
              <FaFacebookSquare></FaFacebookSquare>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
