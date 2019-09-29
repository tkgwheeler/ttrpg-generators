import React, { useEffect, useState } from "react";

import Button from "../../Common/Button/Button";
import Card from "../../Common/Card/Card";
import Label from "../../Common/Label/Label";

const Goods = props => {
  const { weightedRandomBag } = props;

  const [goodsContained, setGoodsContained] = useState("");

  const handleClick = () => {
    let goodsContents = {
      lowValue: weightedRandomBag(goodsLowValue),
      highValue: weightedRandomBag(goodsHighValue),
    };
    setGoodsContained(goodsContents);
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <Card
      title="Goods"
      action={<Button handleClick={handleClick} label="Regenerate" />}
    >
      <h2>Goods</h2>
      <Label text="Low value goods" />
      <p>{goodsContained.lowValue}</p>
      <Label text="High value goods" />
      <p>{goodsContained.highValue}</p>
    </Card>
  );
};

export default Goods;

const goodsLowValue = [
  {
    name: "Cotton/Wool/Flax",
    weight: 8,
  },
  {
    name: "Furs/Hides/Skins",
    weight: 8,
  },
  {
    name: "Ingots: Iron/Copper/Lead/Tin",
    weight: 4,
  },
  {
    name: "Lumber",
    weight: 4,
  },
  {
    name: "Wine/Ale/Beer/Liquor",
    weight: 9,
  },
  {
    name: "Grain/Foodstuffs",
    weight: 13,
  },
  {
    name: "Livestock/Slaves",
    weight: 4,
  },
  {
    name: "Sugar/Spices/Hemp/Jute/Pipeweed/Herbs/Salt*",
    weight: 13,
  },
];

const goodsHighValue = [
  {
    name: "Armor/Weapons",
    weight: 12,
  },
  {
    name: "Coffee/Tea",
    weight: 4,
  },
  {
    name: "Exotic Fruits",
    weight: 4,
  },
  {
    name: "Leathers/Silks/Fabrics",
    weight: 10,
  },
  {
    name: "Gold/Silver/Electrum/Platinum Bars",
    weight: 3,
  },
  {
    name: "Ivory",
    weight: 2,
  },
  {
    name: "Narcotics/Medicine",
    weight: 3,
  },
  {
    name: "Perfumes",
    weight: 5,
  },
];
