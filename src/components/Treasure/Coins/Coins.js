import React, { useState } from "react";

import Button from "../../Common/Button/Button";
import Card from "../../Common/Card/Card";
import Label from "../../Common/Label/Label";

const Coins = props => {
  const { weightedRandomBag } = props;

  const [coinsContained, setCoinsContained] = useState("");

  const handleClick = () => {
    let coinsContents = {
      type: weightedRandomBag(coinType),
    };
    setCoinsContained(coinsContents);
  };

  return (
    <Card
      title="Coins"
      action={<Button handleClick={handleClick} label="Regenerate" />}
    >
      <h2>Coins</h2>
      <Label text="Coin type" />
      <p>{coinsContained.type}</p>
    </Card>
  );
};

export default Coins;

const coinType = [
  {
    name: "Copper",
    weight: 2,
  },
  {
    name: "Silver",
    weight: 3,
  },
  {
    name: "Electrum",
    weight: 2,
  },
  {
    name: "Gold",
    weight: 3,
  },
  {
    name: "Platinum",
    weight: 1,
  },
];
