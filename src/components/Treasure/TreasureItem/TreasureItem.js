import Art from "../Art/Art";
import Coins from "../Coins/Coins";
import Goods from "../Goods/Goods";
import Jewelry from "../Jewelry/Jewelry";
import React from "react";

const TreasureItem = props => {
  const { treasure, weightedRandomBag } = props;
  let item;

  switch (treasure.type) {
    case "Art":
      item = <Art weightedRandomBag={weightedRandomBag} />;
      break;
    case "Coins":
      item = <Coins weightedRandomBag={weightedRandomBag} />;
      break;
    case "Goods":
      item = <Goods weightedRandomBag={weightedRandomBag} />;
      break;
    case "Jeweled Items":
      item = <Jewelry weightedRandomBag={weightedRandomBag} />;
      break;
    default:
      item = <></>;
  }

  return <div style={{ marginBottom: "32px" }}>{item}</div>;
};

export default TreasureItem;
