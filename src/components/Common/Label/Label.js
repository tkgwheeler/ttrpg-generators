import React from "react";
import labelStyles from "./label.module.less";

const Label = props => {
  return (
    <>
      <span className={labelStyles.label}>{props.text}</span>
    </>
  );
};

export default Label;
