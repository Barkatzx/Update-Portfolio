import axios from "axios";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import { Link, useLocation } from "react-router-dom";
import BottomLine from "../../Components/Atoms/BottomLine/BottomLine";
import { headingAnimation, sectionBodyAnimation } from "../../Hooks/useAnimation";
import LodingSpinner from "../Loader/LodingSpinner";
import "./Projects.css";

const Projects = () => {
  const [items, setItems] = useState([]);
  const [activeBtn, setActiveBtn] = useState("all");
  const location = useLocation();
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const animation = useAnimation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://barkat-portfolio-server.vercel.app/project");
        const data = response.data;
        setIsLoading(false);
  
        if (location.pathname === "/" || location.pathname === "/project") {
          // Reverse the order for both "/" and "/project" routes
          setItems(data.slice().reverse());
        } else {
          setItems(data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      }
    };
  
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  
    fetchData();
  }, [inView, location.pathname]);
  

  const filterItem = (category) => {
    const filtered = items.filter((item) => item.category === category);
    setItems(prevItems => {
      if (filtered.length > 3 && location.pathname === "/") {
        return filtered.slice(0, 3);
      }
      return filtered;
    });
  };

  if (isLoading) {
    return <LodingSpinner/>;
  }

  return (
    <div className={`${location.pathname !== "/" && "mt-10"}`}>
      <div className="container mx-auto mt-10">
        <motion.div
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={headingAnimation}
        >
          <div className="mb-12">
            <h3 className="text-center">Some Of My Recent Projects</h3>
            <h1 className="text-4xl font-semibold text-center">Featured Projects</h1>
            <BottomLine />
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={sectionBodyAnimation}
        >
          {/* <div className="mt-6 mb-2 flex items-center justify-center flex-wrap">
          <button
  className={`btn btn-sm bg-primary border-2 border-primary text-white hover:bg-transparent hover:border-primary duration-300 mx-3 my-3 sm:my-0 ${activeBtn === "all" && "active-btn"}`}
  onClick={() => {
    setActiveBtn("all");
    location.pathname === "/" ? setItems(items.slice(0, 6)) : setItems(items);
  }}
>
  All
</button>
            <button
              className={`btn btn-sm bg-primary border-2 border-primary text-white hover:bg-transparent hover:border-primary duration-300 mx-3 my-3 sm:my-0 ${activeBtn === "business" && "active-btn"}`}
              onClick={() => {
                setActiveBtn("business");
                filterItem("business");
              }}
            >
              Business
            </button>
            <button
              className={`btn btn-sm bg-primary border-2 border-primary text-white hover:bg-transparent hover:border-primary duration-300 mx-3 my-3 sm:my-0 ${activeBtn === "e-commerce" && "active-btn"}`}
              onClick={() => {
                setActiveBtn("e-commerce");
                filterItem("e-commerce");
              }}
            >
              E-commerce
            </button>
            <button
              className={`btn btn-sm bg-primary border-2 border-primary text-white hover:bg-transparent hover:border-primary duration-300 mx-3 my-3 sm:my-0 ${activeBtn === "portfolio" && "active-btn"}`}
              onClick={() => {
                setActiveBtn("portfolio");
                filterItem("portfolio");
              }}
            >
              Portfolio
            </button>
          </div> */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.slice().map((item) => (
  <motion.div
    key={item._id}
    initial={{ x: 200, opacity: 0, scale: 0 }}
    animate={{
      x: 0,
      scale: 1,
      opacity: 1,
      transition: { duration: 0.3 },
    }}
    className="item-container rounded-2xl shadow-2xl p-2 flex flex-col justify-between hover:shadow-primary duration-500"
    style={{ backgroundColor: "#313131" }}
  >
    <div className="item h-full">
      <img
        className="rounded-lg h-full w-full"
        src={item.photo}
        alt={item.title || "Item Image"}
      />
      <div className="overlay">
        <h3 className="text-2xl text-primary font-semibold">
          {item.title}
        </h3>
        <Link
          to={`/project/${item._id}`}
          className="mt-3 inline-block"
        >
          <button className="btn btn-sm border-2 border-transparent bg-primary hover:bg-transparent text-white hover:border-primary duration-500">
            See Details
          </button>
        </Link>
      </div>
    </div>
  </motion.div>
))}

          </div>
        </motion.div>

        {location.pathname === "/" && (
          <div className="mt-4 text-right">
            <Link
              to="/project"
              className="text-2xl hover:text-primary duration-300"
            >
              <button className="primary-button">
                <span>See All</span>
                <span>
                  <FiArrowRight />
                </span>
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
