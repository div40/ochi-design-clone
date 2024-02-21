import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed z-[999] w-full px-4 md:px-6 lg:px-14 py-4 flex justify-between items-center">
      <div>
        <Image src="ochi-logo.svg" alt="ochi logo" height={30} width={72} />
      </div>
      <div className="items-center hidden gap-6 lg:flex justify-evenly ">
        {NAV_LINKS.map((link, index) => (
          <Link
            href={link.href}
            key={link.key}
            className={`text-[#212121] text-[17px] font-neue ${
              index === NAV_LINKS.length - 1 && "ml-64"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
      <div className="block lg:hidden">
        <svg
          class="nav-toggle"
          width="24"
          height="9"
          viewBox="0 0 24 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="24"
            y1="8"
            x2="-4.37114e-08"
            y2="8"
            stroke="currentColor"
          ></line>
          <line
            x1="24"
            y1="1"
            x2="4.37114e-08"
            y2="1"
            stroke="currentColor"
          ></line>
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
