import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../Components/CoreCompo/Footer/Footer";
import NavBar from "../../Components/CoreCompo/NavBar/NavBar";

const Main = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;