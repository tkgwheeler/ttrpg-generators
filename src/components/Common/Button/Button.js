import React from "react";
import buttonStyles from "./button.module.less";

const Button = props => {
  const { handleClick, label, type, style } = props;
  let btnType;

  switch (type) {
    default:
      btnType = buttonStyles.primary;
      break;
    case "primary":
      btnType = buttonStyles.primary;
      break;
    case "link":
      btnType = buttonStyles.link;
      break;
  }

  return (
    <button
      style={style}
      className={`${buttonStyles.btn} ${btnType}`}
      onClick={() => handleClick()}
    >
      {label}
    </button>
  );
};

export default Button;
