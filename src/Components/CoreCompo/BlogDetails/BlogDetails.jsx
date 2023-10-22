import React, { useEffect, useState } from "react";
import { BsCalendarDateFill, BsFillPenFill } from 'react-icons/bs';
import { FiExternalLink } from "react-icons/fi";
import { SiInstagram, SiLinkedin } from "react-icons/si";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import blogs from "../../../Pages/Utilis/Blogs";
import placeholderImage from "../../../assets/placeholder.jpg";
import Footer from "../Footer/Footer";
import NavBar from "../NavBar/NavBar";

const BlogDetails = () => {
  const { blog_path } = useParams();
  const [blog, setBlog] = useState({});
  const url = window.location.href;

  useEffect(() => {
    const current_blog = blogs.find((blog) => blog.path === blog_path);
    setBlog(current_blog);
  }, [blog_path]);

  return (
    <div>
      <NavBar/>
    <div className="mt-20">
      <h1 className="text-center text-4xl">{blog?.title}</h1>
      <div className="text-center my-8">
        <LazyLoadImage
          placeholderSrc={placeholderImage}
          src={blog?.img}
          alt="Blog Main Image"
          className="main_blog_image"
        />
      </div>
      <div className="flex items-center justify-between flex-wrap mt-16 mb-4 p-10">
        <span>
          <strong className="text-lg flex gap-3 items-center"><BsFillPenFill/> Barkat Ullah</strong>
        </span>
        <span>
          <strong className="text-lg flex gap-3 items-center"><BsCalendarDateFill/> {blog?.date}</strong>
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 p-10">
        <div className="md:col-span-2 lg:col-span-3">
          {blog?.description?.split("\n")?.map((s, i) => (
            <React.Fragment key={i + 1}>
              <p className="text-justify">{s}</p>
              <br />
            </React.Fragment>
          ))}
        </div>
        <div className="md:col-span-2 lg:col-span-1 px-4 py-6 rounded shadow-lg">
          <div className="">
            <h4 className="text-lg font-medium mb-3">Other :</h4>
            <p className="flex items-center gap-3">
              <span>
                <SiInstagram />
              </span>
              <a
                href={blog?.instagram_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center"
              >
                <span>Instagram</span> <FiExternalLink />
              </a>
            </p>
            <p className="flex items-center gap-3">
              <span>
                <SiLinkedin />
              </span>
              <a
                href={blog?.linkedin_link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline flex items-center"
              >
                <span>LinkedIn</span> <FiExternalLink />
              </a>
            </p>
          </div>

          <div className="w-full h-[1px] bg-neutral my-6"></div>

          <h4 className="text-lg font-medium mb-3">
            Share :{" "}
          </h4>
          <div className="flex items-center gap-4 flex-wrap">
            <EmailShareButton url={url} title="Barkat Ullah ">
              <EmailIcon size={32} round={true} />
            </EmailShareButton>
            <FacebookShareButton url={url} title="Barkat Ullah ">
              <FacebookIcon size={32} round={true} />
            </FacebookShareButton>
            <TwitterShareButton url={url} title="Barkat Ullah ">
              <TwitterIcon size={32} round={true} />
            </TwitterShareButton>
            <LinkedinShareButton url={url} title="Barkat Ullah ">
              <LinkedinIcon size={32} round={true} />
            </LinkedinShareButton>
            <WhatsappShareButton url={url} title="Barkat Ullah ">
              <WhatsappIcon size={32} round={true} />
            </WhatsappShareButton>
          </div>

          <div className="w-full h-[1px] bg-neutral my-6"></div>

          <h4 className="text-lg font-medium mb-3">Tags : </h4>
          <div>
            {blog?.tags?.map((tag) => (
              <button
                key={tag}
                className="bg-gray-300 text-white bg-opacity-40 px-2 py-0 m-1 rounded"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default BlogDetails;
