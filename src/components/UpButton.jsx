import React from "react";
import { arrowTop } from "../assets";
import styles from "../style";
const UpButton = () => {
  return (
    <button className={`${styles.flexCenter} `}>
      <img
        src={arrowTop}
        alt="arrow top"
        className="w-[24px] h-[24px] object-contain self-center"
      />
    </button>
  );
};

export default UpButton;
