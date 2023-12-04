import React, { useEffect, useState } from "react";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { BsCalendarDateFill } from 'react-icons/bs';
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import LodingSpinner from "../../../Pages/Loader/LodingSpinner";
import placeholderImage from "../../../assets/placeholder.jpg";

const BlogDetails = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://barkat-portfolio-server.vercel.app/blogs/${id}`);
        const jsonData = await response.json();
        setBlogData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <LodingSpinner/>;
  }


  return (
    <div className="container mx-auto">
      <div className="text-center my-8">
        <LazyLoadImage
          placeholderSrc={placeholderImage}
          src={blogData?.photo}
          alt="Blog Main Image"
          className="main_blog_image rounded-xl shadow-xl"
        />
      </div>
      <div>
      <h1 className="text-center font-semibold text-4xl">{blogData?.title}</h1>
      </div>
      <div className="flex items-center  flex-wrap justify-center p-4 gap-4">
      <div className="avatar flex gap-3">
  <div className="w-10 rounded-full">
    <img src="https://i.ibb.co/jZR3GDx/Barkat.png" />
  </div>
          <strong className="text-xl flex gap-3 items-center text-neutral"> Barkat Ullah</strong>
          </div> 
        <span>
          <strong className="text-xl flex gap-3 items-center text-neutral"><BsCalendarDateFill/> {blogData?.date}</strong>
        </span>
        <span>
          <strong className="text-xl flex gap-3 items-center text-neutral"><BiSolidCategoryAlt />
 {blogData?.category}</strong>
        </span>
      </div>
      <div className="p-5">
        <div className="text-2xl">
          {blogData?.paragraph?.split("\n")?.map((s, i) => (
            <React.Fragment key={i + 1}>
              <p className="text-justify">{s}</p>
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
