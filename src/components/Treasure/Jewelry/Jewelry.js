import React, { useState } from "react";

import Button from "../../Common/Button/Button";
import Label from "../../Common/Label/Label";

const Jewelry = props => {
  const { weightedRandomBag } = props;

  const [jewelryContained, setJewelryContained] = useState("");

  const handleClick = () => {
    let jewelryContents = {
      item: weightedRandomBag(jewelryItem),
    };
    setJewelryContained(jewelryContents);
  };

  return (
    <div>
      <h3>Jewelry</h3>
      <Label text="Jewelry item" />
      <p>{jewelryContained.item}</p>
      <Button handleClick={handleClick} label="Generate Jewelry" />
    </div>
  );
};

export default Jewelry;

const jewelryItem = [
  {
    name: "Anklet",
    weight: 2,
  },
  {
    name: "Armband",
    weight: 3,
  },
  {
    name: "Belt",
    weight: 2,
  },
  {
    name: "Small Box",
    weight: 2,
  },
  {
    name: "Braclet",
    weight: 5,
  },
  {
    name: "Broach",
    weight: 3,
  },
  {
    name: "Buckle",
    weight: 1,
  },
  {
    name: "Chain",
    weight: 1,
  },
];
