import Button from "../../Common/Button/Button";
import Label from "../../Common/Label/Label";
import React from "react";

const TreasureHeader = props => {
  const { inputValue, inputChange, handleClick } = props;

  return (
    <div style={{ marginBottom: "40px" }}>
      <h1>Treasure</h1>
      <Label text="Number of Items" />
      <div style={{ marginBottom: "24px" }}>
        <input
          value={inputValue}
          onChange={inputChange}
          type="number"
          min="0"
          max="50"
          step="1"
        />
      </div>
      <Button handleClick={handleClick} label="Get Treasure" type="primary" />
    </div>
  );
};

export default TreasureHeader;
