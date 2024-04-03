import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[16px] text-primary outline-none rounded-[14px] hover:bg-purple-gradient duration-200 hover:scale-[1.05] ${styles}`}
    >
      Get Started
    </button>
  );
};

export default Button;
