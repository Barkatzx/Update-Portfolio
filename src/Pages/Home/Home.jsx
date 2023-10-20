import React from "react";
import Banner from "../../Components/CoreCompo/Banner/Banner";
import Footer from "../../Components/CoreCompo/Footer/Footer";
import Information from "../../Components/CoreCompo/Information/Information";
import NavBar from "../../Components/CoreCompo/NavBar/NavBar";
import Service from "../../Components/CoreCompo/Services/Service";
import Testimonial from "../../Components/CoreCompo/Testimonial/Testimonial";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";


const Home = () => {
  return (
    <div className="">
      <NavBar/>
      <Banner />
      <Service/>
      <Projects/>
      <Testimonial/>
      <Information/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
