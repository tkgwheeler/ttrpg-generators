import React, { useState } from "react";

import Art from "./Art/Art";
import Button from "../Common/Button/Button";
import Coins from "./Coins/Coins";
import Goods from "./Goods/Goods";
import Jewelry from "./Jewelry/Jewelry";
import TreasureContainer from "./TreasureContainer/TreasureContainer";
import TreasureItem from "./TreasureItem/TreasureItem";

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

  const handleClick = () => {
    let treasureType = {
      type: weightedRandomBag(treasureTypes),
    };
    setTreasure(treasureType);
  };

  return (
    <div>
      <h1>Treasure</h1>
      <button onClick={() => handleClick()}>Treasure Type</button>
      <TreasureContainer
        treasure={treasure}
        weightedRandomBag={weightedRandomBag}
      />
      <TreasureItem treasure={treasure} weightedRandomBag={weightedRandomBag} />
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
];

// {
//     name: "Furnishings and clothing",
//     weight: 4,
//   },
//   {
//     name: "Gems",
//     weight: 2,
//   },
//   {
//     name: "Special and Magic Items",
//     weight: 1,
//   },

{
  /* 
<Art weightedRandomBag={weightedRandomBag} />
<Jewelry weightedRandomBag={weightedRandomBag} />
<Goods weightedRandomBag={weightedRandomBag} />
<Coins weightedRandomBag={weightedRandomBag} visible={treasure} /> */
}
