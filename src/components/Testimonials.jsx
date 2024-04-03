import React from "react";
import { feedback } from "../constants";
import styles, { layout } from "../style";
import FeedbackCard from "../components/FeedbackCard";

const Testimonials = () => {
  return (
    <section
      id="clients"
      className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}
    >
      <div className="absolute z-[0] -right-1/2 h-[60%] w-[60%] rounded-full blue__gradient" />

      <div
        className={`flex items-center justify-between sm:mb-16 mb-6 w-full md:flex-row flex-col realtive z-[1]`}
      >
        <h2 className={`${styles.heading2}`}>
          What people are
          <br className="sm:block hidden" />
          <span className="text-gradient-1">saying</span> about us
        </h2>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>

      <div className="w-full flex flex-wrap sm:justify-start justify-center relative z-[1] feedback-container">
        {feedback.map((card) => (
          <FeedbackCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
