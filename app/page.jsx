import Home from "@/components/Home";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Navbar />
      <Home />
    </div>
  );
};

export default page;
