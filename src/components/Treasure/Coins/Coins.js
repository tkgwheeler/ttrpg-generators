import React, { useState } from "react";

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
    <div>
      <button onClick={() => handleClick()}>Generate Coins</button>
      <h2>Coins</h2>
      <p>{coinsContained.type}</p>
    </div>
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
