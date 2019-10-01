import IconCoins from "../Icons/IconCoins";
import React from "react";

const ItemValue = props => {
  const { value } = props;
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <p style={{ marginBottom: "0px", marginRight: "8px" }}>{value}</p>
      <IconCoins />
    </div>
  );
};

export default ItemValue;
