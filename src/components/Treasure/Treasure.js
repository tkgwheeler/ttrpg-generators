import React, { useState } from "react";

import Button from "../Common/Button/Button";
import TreasureContainer from "./TreasureContainer/TreasureContainer";
import TreasureList from "./TreasureList/TreasureList";

const Treasure = () => {
  const [treasure, setTreasure] = useState([]);

  const numberOfItems = 5;

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
    setTreasure(createTreasureList());
  };

  const createTreasureList = () => {
    let treasureList = [];
    for (let i = 0; i < numberOfItems; i++) {
      let treasureType = {
        type: weightedRandomBag(treasureTypes),
      };
      treasureList.push(treasureType);
    }
    return treasureList;
  };

  return (
    <div>
      <div style={{ marginBottom: "40px" }}>
        <h1>Treasure</h1>
        <Button handleClick={handleClick} label="Get Treasure" type="primary" />
      </div>
      <TreasureContainer
        treasure={treasure}
        weightedRandomBag={weightedRandomBag}
      />
      <TreasureList
        weightedRandomBag={weightedRandomBag}
        treasureList={treasure}
      />
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
