import React from "react";
import Banner from "../../Components/CoreCompo/Banner/Banner";
import Information from "../../Components/CoreCompo/Information/Information";
import Service from "../../Components/CoreCompo/Services/Service";
import Testimonial from "../../Components/CoreCompo/Testimonial/Testimonial";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";


const Home = () => {
  return (
    <div className="">
      <Banner />
      <Service/>
      <Projects/>
      <Testimonial/>
      <Information/>
      <Contact/>
    </div>
  );
};

export default Home;
