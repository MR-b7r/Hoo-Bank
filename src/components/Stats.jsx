import React from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  return (
    <section
      className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}
    >
      {stats.map((state) => (
        <div
          key={state.id}
          className="flex flex-1 flex-row justify-start items-center m-3"
        >
          <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] text-white xs:leading-[53px] leading-[43px]">
            {state.value}
          </h4>
          <p
            className={`font-poppins font-semibold xs:text-[20px] text-[15px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3`}
          >
            {state.title}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Stats;
