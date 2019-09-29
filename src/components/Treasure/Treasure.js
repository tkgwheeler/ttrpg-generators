import React, { useState } from "react";

import Button from "../Common/Button/Button";
import Label from "../Common/Label/Label";
import TreasureContainer from "./TreasureContainer/TreasureContainer";
import TreasureList from "./TreasureList/TreasureList";

const Treasure = () => {
  const [treasure, setTreasure] = useState([]);
  const [amount, setAmount] = useState(3);
  const [newAmount, setNewAmount] = useState(3);

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
    setAmount(newAmount);
    setTreasure(createTreasureList());
  };

  const handleAmountChange = event => {
    setNewAmount(event.target.value);
  };

  const createTreasureList = () => {
    let treasureList = [];
    for (let i = 0; i < newAmount; i++) {
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
        <Label text="Number of Items" />
        <div style={{ marginBottom: "24px" }}>
          <input
            value={newAmount}
            onChange={handleAmountChange}
            type="number"
            min="0"
            max="50"
            step="1"
          />
        </div>
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
