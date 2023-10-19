import React from "react";
import Banner from "../../Components/CoreCompo/Banner/Banner";
import NavBar from "../../Components/CoreCompo/NavBar/NavBar";
import Service from "../../Components/CoreCompo/Services/Service";
import Projects from "../Projects/Projects";


const Home = () => {
  return (
    <div className="">
      <NavBar/>
      <Banner />
      <Service/>
      <Projects/>
    </div>
  );
};

export default Home;
