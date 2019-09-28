import React, { useState } from "react";

import Art from "./Art/Art";
import Jewelry from "./Jewelry/Jewelry";
import TreasureContainer from "./TreasureContainer/TreasureContainer";

const Treasure = () => {
  const [treasure, setTreasure] = useState("");

  const weightedRandomBag = items => {
    let entries = [];
    let accumulatedWeight = 0;
    let random;
    let foundItem;

    items.forEach(x => {
      accumulatedWeight += x.weight;
      entries.push({ name: x.name, weight: accumulatedWeight });
    });

    random = Math.random() * accumulatedWeight;
    foundItem = entries.find(entry => entry.weight >= random);
    return foundItem.name;
  };

  return (
    <div>
      <h1>Treasure</h1>
      <h2>{treasure}</h2>
      <TreasureContainer weightedRandomBag={weightedRandomBag} />
      <Art weightedRandomBag={weightedRandomBag} />
      <Jewelry weightedRandomBag={weightedRandomBag} />
    </div>
  );
};

export default Treasure;

const treasureTypes = [
  {
    name: "Art",
    weight: 1,
  },
  {
    name: "Jeweled Items",
    weight: 2,
  },
  {
    name: "Goods",
    weight: 4,
  },
  {
    name: "Coins",
    weight: 6,
  },
  {
    name: "Furnishings and clothing",
    weight: 4,
  },
  {
    name: "Gems",
    weight: 2,
  },
  {
    name: "Special and Magic Items",
    weight: 1,
  },
];
