import IconDice from "../Icons/IconDice";
import React from "react";
import buttonStyles from "./button.module.less";

const IconButton = props => {
  const { handleClick } = props;
  return (
    <div className={buttonStyles.icon} onClick={handleClick}>
      <IconDice color="secondary" />
    </div>
  );
};

export default IconButton;
