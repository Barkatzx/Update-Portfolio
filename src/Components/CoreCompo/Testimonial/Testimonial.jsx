import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import {
  headingAnimation,
  sectionBodyAnimation,
} from "../../../Hooks/useAnimation";
import Reviews from "../../../Pages/Utilis/Reviews";
import { BottomLine } from "../../Atoms/allAtoms";
import "./Testimonial.css";

const Testimonial = () => {
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

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto mt-10">
      <motion.div
        className="mb-8"
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        <h3 className="text-center">What My Clients Say</h3>
        <h1 className="text-4xl font-semibold text-center">
          Testimonials
        </h1>
        <BottomLine />
      </motion.div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={sectionBodyAnimation}
      >
        <Slider {...settings}>
          {Reviews.map((review) => (
            <div key={review.id} className="mt-6">
              <div
                className="mx-4 rounded-lg shadow-xl single-blog cursor-pointer border-2 border-primary pt-6 flex flex-col justify-between h-[300px]"
                style={{ backgroundColor: "#2c2c6c" }}
              >
                <div className="px-6">
                  <FaQuoteLeft className="mb-4 text-6xl text-primary"></FaQuoteLeft>
                  <h2 className="text-center text-lg font-semibold">{review.description}</h2>
                </div>
                <div className="flex justify-end px-6 py-2 pt-5 bg-primary">
                  <div className="mr-4 text-right text-gray-200">
                    <h2 className="font-medium text-lg leading-none">{review.name}</h2>
                    <p className="text-xs font-medium leading-none mt-2">{review.bio}</p>
                  </div>
                  <img
                    src={review.img}
                    alt="client"
                    className="inline-block w-16 h-16 -mt-10 bg-white rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Testimonial;
