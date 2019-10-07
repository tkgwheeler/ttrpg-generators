import Button from "../../Common/Button/Button";
import Label from "../../Common/Label/Label";
import React from "react";

const TreasureHeader = props => {
  const { handleClick } = props;

  return (
    <div style={{ marginBottom: "40px" }}>
      <h1>Treasure</h1>
      <Button handleClick={handleClick} label="Get Treasure" type="primary" />
    </div>
  );
};

export default TreasureHeader;
