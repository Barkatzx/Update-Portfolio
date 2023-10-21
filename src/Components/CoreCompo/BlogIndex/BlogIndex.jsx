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
import blogs from "../../../Pages/Utilis/Blogs";
import placeholderImage from "../../../assets/placeholder.jpg";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const BlogIndex = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(6);
  const [ref, inView] = useInView();
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();;
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(indexOfFirstBlog, indexOfLastBlog);

  const totalPages = Math.ceil(blogs.length / blogsPerPage);

  const handleNextPageClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPageClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  return (
    <div>
      <NavBar/>
    <div className="parent py-16 mt-10">
      <motion.div
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h1 className="text-3xl font-semibold text-center">
          New Blog Post
        </h1>
        <BottomLine />
      </motion.div>
      <div className="mt-10">
        <motion.div
          className=" grid grid-cols-1 md:grid-cols-3 gap-8"
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={sectionBodyAnimation}
        >
          {currentBlogs.map((blog) => {
            const { _id, title, date, img, description, path } = blog;
            return (
              <div
                key={_id}
                className="flex flex-col w-full items-center justify-between gap-8 rounded-lg min-h-32"
              >
                <div className="w-full">
                  <Link to={"/blog/" + path}>
                    <LazyLoadImage
                      placeholderSrc={placeholderImage}
                      src={img}
                      className="rounded-lg blog_image cursor-pointer"
                    />
                  </Link>
                </div>
                <div className="w-full">
                  <h2 className="text-[22px] font-medium text-white cursor-pointer hover:text-primary mt-[-25px]">
                    <Link to={"/blog/" + path}>{title}</Link>
                  </h2>
                  <span className="text-gray-600 text-sm">
                    <p>{date}</p>
                  </span>
                  <p className="text-neutral mt-1 mb-6">
                    {description?.slice(0, 80)} ...
                  </p>

                </div>
              </div>
            );
          })}
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
    <Footer/>
    </div>
  );
};

export default BlogIndex;