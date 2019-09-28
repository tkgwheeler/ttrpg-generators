import React from "react";
import buttonStyles from "./button.module.less";

const Button = props => {
  const { handleClick, label } = props;
  return (
    <>
      <button
        className={`${buttonStyles.btn} ${buttonStyles.btnLink}`}
        onClick={() => handleClick()}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
