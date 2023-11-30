import axios from "axios";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import {
    headingAnimation,
    sectionBodyAnimation,
} from "../../../Hooks/useAnimation";
import placeholderImage from "../../../assets/placeholder.jpg";
import { BottomLine } from "../../Atoms/allAtoms";

const Information = () => {
    const [currentPage] = useState(1);
    const [blogsPerPage] = useState(6);
    const [ref, inView] = useInView();
    const [viewDiv, setViewDiv] = useState(false);
    const animation = useAnimation();;
    const [blogs, setBlogs] = useState([]);
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs =
blogs &&
blogs
  .filter((blog) => blog.date) // Filter out entries without a date
  .map((blog) => ({ ...blog, date: new Date(blog.date) })) // Convert date strings to Date objects
  .sort((a, b) => a.date - b.date) // Sort in ascending order by date
  .slice(indexOfFirstBlog, indexOfLastBlog)
  .reverse(); // Reverse the array to show most recent blogs first

        useEffect(() => {
            const fetchData = async () => {
              try {
                const response = await axios.get("https://barkat-portfolio-server.vercel.app/blogs");
                setBlogs(response.data);
              } catch (error) {
                console.error('Error fetching data:', error);
              }
            };
          
            console.log(blogs);
          
            // Set the viewDiv state based on inView
            if (inView) {
              setViewDiv(true);
            } else {
              setViewDiv(false);
            }
          
            // Call the fetchData function
            fetchData();
          }, [inView, animation, setBlogs, setViewDiv]);

    return (
        <div className="container mx-auto mt-10">
            <motion.div
                initial="hidden"
                animate={viewDiv && "visible"}
                variants={headingAnimation}
            > <h3 className="text-center">My Recent</h3>
                <h1 className="text-3xl font-semibold text-center">
                    Blog Post
                </h1>
                <BottomLine />
            </motion.div>
            <div className="pt-10">
                <motion.div
                    className=" grid grid-cols-1 md:grid-cols-3 gap-8"
                    ref={ref}
                    initial="hidden"
                    animate={viewDiv && "visible"}
                    variants={sectionBodyAnimation}
                >
                    {currentBlogs.map((blog) => {
                        const { _id, title, date, photo, category } = blog;
                        return (
                            <div
                                key={_id}
                                className="flex flex-col w-full items-center justify-between gap-8 rounded-lg min-h-32 relative"
                            >
                                {/* ..........Other Design Like Newspaper.................. */}
                                {/* <div className="w-full">
                                    <Link to={`/blogs/${blog._id}`}>
                                        <LazyLoadImage
                                            placeholderSrc={placeholderImage}
                                            src={photo}
                                            className="rounded-lg blog_image cursor-pointer"
                                        />
                                    </Link>
                                </div>
                                <div className="w-full">
                                    <h2 className="text-[22px] font-medium text-white cursor-pointer hover:text-primary mt-[-25px]">
                                        <Link to={`/blogs/${blog._id}`}>{title}</Link>
                                    </h2>
                                    <span className="text-gray-600 text-sm">
                                        <p>{date}</p>
                                    </span>
                                    <p className="text-neutral mt-1 mb-6">
                                        {paragraph?.slice(0, 80)} ...
                                    </p>
                                </div> */}
                                {/* -----New Design------------ */}
                                <Link to={`/blogs/${blog._id}`}>
        <LazyLoadImage
          placeholderSrc={placeholderImage}
          src={photo}
          className="rounded-2xl w-auto h-80 cursor-pointer shadow-xl"
        />
      </Link>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end p-4">
      <div className="text-yellow-400 text-lg font-semibold">{category}
        </div>
        <h2 className="text-gray-300 text-2xl font-bold cursor-pointer hover:text-white">
          <Link to={`/blogs/${blog._id}`}>{title}</Link>
        </h2>
        <p className="text-white font-semibold">{date.toDateString()}</p>
      </div>
                            </div>
                        );
                    })}
                </motion.div>
            </div>
            <Link
                to="/blogs"
                className="text-1xl hover:text-primary duration-300"
            >
                <button className="primary-button ">
                    <span>See All</span>
                    <span>
                        <FaAngleRight />
                    </span>
                </button>
            </Link>
        </div>
    );
};

export default Information;
