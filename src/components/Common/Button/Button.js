import React from "react";

const Button = props => {
  const { handleClick, label } = props;
  return (
    <>
      <button onClick={() => handleClick()}>{label}</button>
    </>
  );
};

export default Button;
