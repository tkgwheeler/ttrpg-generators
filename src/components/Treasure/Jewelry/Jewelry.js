import React, { useEffect, useState } from "react";

import Button from "../../Common/Button/Button";
import Card from "../../Common/Card/Card";
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

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <Card
      title="Jewelry"
      action={
        <Button
          handleClick={handleClick}
          label="Generate Jewelry"
          type="link"
        />
      }
    >
      <Label text="Type" />
      <h3>{jewelryContained.item}</h3>
    </Card>
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
