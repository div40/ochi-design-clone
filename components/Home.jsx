import React from "react";
import Button from "./Button";
import Image from "next/image";

const Home = () => {
  return (
    <div className="w-full h-screen bg-[#f1f1f1] flex flex-col">
      <div className=" tracking-normal font-founders leading-none uppercase text-[#212121] flex flex-col -space-y-4 md:-space-y-6 lg:-space-y-6 border-b border-black/30 w-full px-4 md:px-6 lg:px-14 pb-40 lg:pb-32 pt-20 md:pt-28 lg:pt-32">
        <span className="text-6xl md:text-8xl lg:text-9xl">We Create</span>
        <span className="flex items-center gap-2 text-6xl md:text-8xl lg:text-9xl">
          <Image
            src={"/ochi-home.jpg"}
            alt="homeimage"
            height={90}
            width={140}
            className="object-cover mt-2 rounded-lg"
          />
          eye-opening
        </span>
        <span className="text-6xl md:text-8xl lg:text-9xl">presentations</span>
      </div>
      <div className="flex items-center justify-between pt-4 px-14 font-neue">
        <p className="text-[#212121] text-[17px]">
          For public and private companies
        </p>
        <p className="text-[#212121] text-[17px]">
          From the first pitch to IPO
        </p>
        <div className="flex items-center gap-2 group">
          <Button title={"Start the project"} />
          <Button title={"↗"} />
        </div>
      </div>
    </div>
  );
};

export default Home;
