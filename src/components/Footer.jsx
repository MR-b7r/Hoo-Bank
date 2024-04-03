import React from "react";
import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => {
  return (
    <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col w-full mb-8`}>
        <div className={`flex flex-1 justify-start mr-10 flex-col`}>
          <img
            src={logo}
            alt="Hoo-Bank"
            className="object-contain w-[200px] h-[72px]"
          ></img>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex flex-row flex-wrap flex-[1.5] w-full justify-between md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              className="flex flex-col justify-start min-w-[150px] sm:my-0 my-4"
              key={footerLink.title}
            >
              <h4 className="font-poppins font-semibold text-[18px] leading-[27px] text-white">
                {footerLink.title}
              </h4>
              <ul className="list-none mt-4">
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                    }`}
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div
        className={`flex justify-between items-center md:flex-row flex-col w-full pt-6 border-t-[1px] border-t-[#3f3e45]`}
      >
        <p
          className={`font-poppins font-normal text-[18px] leading-[27px] text-white`}
        >
          Copyright © 2022{" "}
          <span className="text-gradient-1 font-semibold">HooBank</span>. All
          Rights Reserved.
        </p>
        <div className="flex flex-row justify-between items-center md:mt-0 mt-6">
          {socialMedia.map((sm, index) => (
            <img
              key={sm.id}
              src={sm.icon}
              alt={sm.id}
              className={`object-contain w-[21px] h-[21px] cursor-pointer hover:scale-110 ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            ></img>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
