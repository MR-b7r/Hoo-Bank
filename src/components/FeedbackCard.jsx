import React from "react";
import { quotes } from "../assets";
import styles, { layout } from "../style";
const FeedbackCard = ({ content, name, title, img }) => {
  return (
    <div className="flex flex-1 flex-col items-start justify-between py-12 px-10 rounded-[20px] max-w-[370px] sm:mr-5 md:mr-10 mr-0 my-5 feedback-card">
      <img
        src={quotes}
        alt="quotes"
        className="w-[42px] h-[27px] object-contain"
      ></img>
      <p className="font-poppins font-normal text-white text-[18px] leading-[32px] my-10">
        {content}
      </p>

      <div className="flex flex-row">
        <img
          src={img}
          alt={name}
          className="w-[48px] h-[48px] object-contain rounded-full"
        ></img>
        <div className="flex flex-col ml-4">
          <h4 className="font-poppins font-semibold text-[20px] text-gradient-1 leading-[32px]">
            {name}
          </h4>
          <p className="font-poppins font-normal text-[16px] text-dimWhite leading-[24px] ">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FeedbackCard;
