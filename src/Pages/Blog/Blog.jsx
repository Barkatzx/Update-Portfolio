import React from "react";
import { Outlet } from "react-router-dom";

const Blog = () => {
  return (
    <div className="py-16 min-h-screen ">
      <Outlet />
    </div>
  );
};

export default Blog;