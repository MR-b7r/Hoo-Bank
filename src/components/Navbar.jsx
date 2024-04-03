import React, { useState } from "react";
import { close, logo, menu } from "../assets";
import { navLinks } from "../constants";
import Button from "./Button";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]"></img>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white duration-200 hover:text-secondary mr-10`}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
        <Button styles={"py-[12px] px-[15px] text-[1em]  "} />
      </ul>

      {/* screens less than 768px */}
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          onClick={() => setToggle((toggle) => !toggle)}
          className="w-[28px] h-[28px] object-contain"
        ></img>

        <div
          className={`${
            toggle ? "flex " : "hidden"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-8"
                }`}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
            <Button styles={"py-[12px] px-[15px] text-[1em]  mt-8"} />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
