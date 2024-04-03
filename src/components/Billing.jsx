import React from "react";
import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => {
  return (
    <section id="product" className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
        <img
          src={bill}
          alt="billing"
          className="w-full h-full z-10 relative"
        ></img>
        <div className="absolute z-[3] top-0 -left-1/2 w-1/2 h-1/2 rounded-full white__gradient"></div>
        <div className="absolute z-[0] bottom-0 -left-1/2 w-1/2 h-1/2 rounded-full pink__gradient"></div>
      </div>

      <div className={`${layout.sectionInfo}`}>
        <h2 className={`${styles.heading2}`}>
          Easily control your <br className="sm:block hidden" />
          <span className="text-gradient-1">billing</span> & invoicing.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          We consider the payment methods you'll offer your customers when you
          start your business. This is an important part of managing your
          business cash flow and meeting your customer's needs.
        </p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <a target="_blank" href="https://www.apple.com/app-store/">
            <img
              src={apple}
              alt="apple store"
              className="w-[128px] h-[42px] object-contain cursor-pointer sm:mr-5 mr-0 sm:mb-0 mb-5"
            />
          </a>
          <a
            target="_blank"
            href="https://play.google.com/store/games?hl=en_US&gl=US"
          >
            <img
              src={google}
              alt="google play"
              className="w-[128px] h-[42px] object-contain cursor-pointer"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Billing;
