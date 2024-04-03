import React from "react";
import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={` flex-1 flex-col ${styles.flexStart} xl:px-0 ${styles.paddingX}`}
      >
        <div
          className={`flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2`}
        >
          <img
            src={discount}
            alt="discount"
            className="w-[32px] h-[32px]"
          ></img>
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20% </span>
            Discount For
            <span className="text-gradient-1"> 1 Month </span>
            Account
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="text-white flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px]">
            The Next <br className="sm:block hidden"></br>{" "}
            <span className="text-gradient">Generation</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
        <h1 className="text-white font-poppins font-semibold ss:text-[68px] text-[52px] ss:leading-[100px] leading-[75px] w-full">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
          Our team of experts use a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>

      <div className={`${styles.flexCenter} flex-1 md:my-0 my-10 relative`}>
        <img
          src={robot}
          alt="billing"
          className="w-full h-full relative z-10"
        />
        <div className="absolute z-0 w-[40%] h-[35%] top-0 pink__gradient" />
        <div className="absolute z-[1] w-[80%] h-[85%] rounded-full bottom-40 white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;
