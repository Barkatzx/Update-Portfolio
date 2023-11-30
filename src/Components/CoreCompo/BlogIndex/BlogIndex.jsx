import axios from "axios";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaAngleDoubleLeft, FaAngleDoubleRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";
import { BottomLine } from "../../../Components/Atoms/allAtoms";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../Hooks/useAnimation";
import placeholderImage from "../../../assets/placeholder.jpg";

const BlogIndex = () => {
  // State variables
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6);
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();
  const [blogs, setBlogs] = useState([]);

  // Calculate the index of the first and last blogs to display
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;

  // Get the current blogs based on pagination
 // Get the current blogs based on pagination, sorted in descending order
      // Get the current blogs based on pagination, sorted by date in ascending order
const currentBlogs =
blogs &&
blogs
  .filter((blog) => blog.date) // Filter out entries without a date
  .map((blog) => ({ ...blog, date: new Date(blog.date) })) // Convert date strings to Date objects
  .sort((a, b) => a.date - b.date) // Sort in ascending order by date
  .slice(indexOfFirstBlog, indexOfLastBlog)
  .reverse(); // Reverse the array to show most recent blogs first

  // Calculate the total number of pages
  const totalPages = Math.ceil((blogs && blogs.length) / blogsPerPage);

  // Handle click for the next page
  const handleNextPageClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle click for the previous page
  const handlePreviousPageClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Fetch data from the server when the component mounts or when 'inView' changes
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
  }, [inView, animation, setBlogs, setViewDiv]); // Make sure to include dependencies
  

  return (
    <div className="parent py-16 pt-10">
      <motion.div
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h1 className="text-3xl font-semibold text-center">New Blog Post</h1>
        <BottomLine />
      </motion.div>
      <div className="mt-10">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={sectionBodyAnimation}
        >
          {blogs.length > 0 ? (
  currentBlogs.map((blog) => (
    <div
      key={blog._id}
      className="relative"
    >
      <Link to={`/blogs/${blog._id}`}>
        <LazyLoadImage
          placeholderSrc={placeholderImage}
          src={blog.photo}
          className="rounded-2xl w-auto h-80 cursor-pointer shadow-xl"
        />
      </Link>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-end p-4">
      <div className="text-lg font-semibold text-yellow-400">{blog.category}
        </div>
        <h2 className="text-gray-300 text-2xl font-bold cursor-pointer hover:text-white">
          <Link to={`/blogs/${blog._id}`}>{blog.title}</Link>
        </h2>
        <p className="text-white font-semibold">{blog.date.toDateString()}</p>
      </div>
    </div>
  ))
) : (
  <p className="text-lg font-semibold">No blogs available.</p>
)}


        </motion.div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <button
          onClick={handlePreviousPageClick}
          disabled={currentPage === 1}
          className="btn text-neutral flex items-center gap-3 border-2 border-primary bg-transparent hover:bg-primary hover:border-transparent hover:text-white duration-500"
        >
          <FaAngleDoubleLeft />
        </button>
        <span className="text-neutral text-2xl px-4">
          {currentPage} / {totalPages}
        </span>
        <button
          onClick={handleNextPageClick}
          disabled={currentPage === totalPages}
          className="btn text-white flex items-center gap-3 border-2 bg-primary hover:bg-transparent hover:border-primary hover:text-neutral duration-500"
        >
          <FaAngleDoubleRight />
        </button>
      </div>
    </div>
  );
};

export default BlogIndex;
