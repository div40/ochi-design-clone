import React from "react";

const Button = ({ title }) => {
  return (
    <button className="px-2 py-1 uppercase border border-black rounded-full w-fit group-hover:bg-[#212121] group-hover:text-white ease-[cubic-bezier(0.215,0.61,0.355,1)] transition duration-300">
      {title}
    </button>
  );
};

export default Button;
