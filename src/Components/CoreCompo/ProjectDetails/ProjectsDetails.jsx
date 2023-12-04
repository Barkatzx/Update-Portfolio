import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaCode, FaLink } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import LodingSpinner from "../../../Pages/Loader/LodingSpinner";
import placeholderImage from "../../../assets/placeholder.jpg";
import { PrimaryBtn, SecondaryBtn } from "../../Atoms/allAtoms";

const ProjectDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://barkat-portfolio-server.vercel.app/project/${id}`);
        setItem(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError("Error fetching data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  if (loading) {
    return <LodingSpinner/>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mx-auto pt-20">
      <h1 className="text-center text-5xl font-medium">{item?.title}</h1>
      <Slider {...settings}>
        {item?.img?.map((item, index) => (
          <div key={index} className="mt-6">
            <div
              className="mx-1 md:mx-4 rounded-2xl shadow-2xl single-blog cursor-pointer border-2 border-primary flex flex-col justify-between"
              style={{ backgroundColor: "#313131" }}
            >
              <LazyLoadImage
                placeholderSrc={placeholderImage}
                // src={image}
                src={item?.photo}
                className="project_image object-cover rounded-2xl w-auto h-80 cursor-pointer shadow-xl"
              />
            </div>
          </div>
        ))}
      </Slider>
      <p className="text-neutral font-medium mt-10 mb-6 p-6">
        <h1 className="font-semibold text-white text-2xl">Description: </h1>
        <h2 className="text-2xl">{item?.description}</h2>
      </p>
      <div className="my-6 p-6">
        <h2 className="text-2xl font-semibold mb-3">Features:</h2>
        <ul className="text-2xl text-neutral">
          {/* {item?.features?.map((feature, index) => (
            <li key={index} className="text-neutral">
              {feature}
            </li>
          ))} */}
          {item?.feature}
        </ul>
      </div>

      <div className="my-6 p-6">
        <h2 className="text-2xl font-semibold mb-3">Tools & Technologies:</h2>
        <ul className="list-disc grid grid-cols-1 md:grid-cols-2 ml-4 text-2xl">
          {item?.technology?.map((feature, index) => (
            <li key={index} className="text-neutral text-2xl">
              {feature}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center p-6 text-2xl">
        <a href={item?.livelink} className="mr-4" target="blank">
          <PrimaryBtn>
            <span>Visit Now</span>
            <span>
              <FaLink />
            </span>
          </PrimaryBtn>
        </a>
        <a href={item?.clientlink} className="mr-4" target="blank">
          <SecondaryBtn>
            <span>Client Code</span>
            <span>
              <FaCode />
            </span>
          </SecondaryBtn>
        </a>
        <a href={item?.serverlink} target="blank">
          <SecondaryBtn>
            <span>Server Code</span>
            <span>
              <FaCode />
            </span>
          </SecondaryBtn>
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
