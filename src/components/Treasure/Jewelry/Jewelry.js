import React, { useState } from "react";

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
      <button onClick={() => handleClick()}>Generate Jewelry</button>
      <h2>{jewelryContained.item}</h2>
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
