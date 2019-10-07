import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import TreasureHeader from "./TreasureHeader/TresureHeader";
import TreasureList from "./TreasureList/TreasureList";

// To Do
// Rename treasure.json to treasureType.json
// Look at Generating coin amounts - Idea to random gen number upto a max then remove from Max upto Coin items number of times

const Treasure = () => {
  const [treasure, setTreasure] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState(3);
  const [value, setValue] = useState(500);
  const [goldRange, setGoldRange] = useState([100, 300]);
  const [challengeRating, setChallengeRating] = useState(1);
  const [hoard, setHoard] = useState(0);

  const queryData = useStaticQuery(graphql`
    {
      allTreasureJson {
        nodes {
          types {
            name
            weight
          }
        }
      }
    }
  `);

  const treasureTypes = queryData.allTreasureJson.nodes[0].types;

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

  const randomIntInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    setTreasure(createTreasureList(treasureTypes));
  };

  const handleAmountChange = event => {
    setNumberOfItems(event.target.value);
  };

  const createTreasureList = weightedArr => {
    let treasureList = [];
    let minValue = goldRange[0];
    let maxValue = goldRange[1];

    for (let i = 0; i < numberOfItems; i++) {
      let treasureType = {
        type: weightedRandomBag(weightedArr),
        value: randomIntInRange(minValue, maxValue) * challengeRating,
      };
      treasureList.push(treasureType);
    }
    return treasureList;
  };

  const hoardSizeRoll = (mod, dice, noDice, diceMod) => {
    let result = mod;
    for (let i = 0; i < noDice; i++) {
      result += randomIntInRange(1, dice) + diceMod;
    }
    return result;
  };

  const hoardFunc = () => {
    let arrName = weightedRandomBag(hoardSize);
    console.log(arrName);
    let arrIdx = hoardSize.findIndex(i => {
      return i.name === arrName;
    });
    let { mod, dice, noDice, diceMod } = hoardSize[arrIdx];
    let result = hoardSizeRoll(mod, dice, noDice, diceMod);
    return result;
  };

  const handleHoard = () => {
    setHoard(hoardFunc());
  };

  // console.log(weightedRandomBag(hoardSize));
  // console.log(hoardSizeRoll(0, 3, 1, 0));

  return (
    <div>
      <TreasureHeader
        handleClick={handleClick}
        inputValue={numberOfItems}
        inputChange={handleAmountChange}
      />
      <TreasureList
        weightedRandomBag={weightedRandomBag}
        treasureList={treasure}
        value={value}
      />
      <button onClick={() => handleHoard()}>Treasure Hoard</button>
      <h1>{hoard}</h1>
    </div>
  );
};

export default Treasure;

const hoardSize = [
  {
    name: "Individual Treasure",
    weight: 1,
    mod: 1,
    dice: 0,
    noDice: 0,
    diceMod: 0,
  },
  {
    name: "Small (Unguarded) Hoard",
    weight: 2,
    mod: 0,
    dice: 3,
    noDice: 1,
    diceMod: 0,
  },
  {
    name: "Small Hoard",
    weight: 4,
    mod: 3,
    dice: 6,
    noDice: 1,
    diceMod: -2,
  },
  {
    name: "Medium Hoard",
    weight: 6,
    mod: 4,
    dice: 4,
    noDice: 1,
    diceMod: -1,
  },
  {
    name: "Large Hoard",
    weight: 3,
    mod: 6,
    dice: 4,
    noDice: 1,
    diceMod: 0,
  },
  {
    name: "Huge Hoard",
    weight: 2,
    mod: 6,
    dice: 4,
    noDice: 2,
    diceMod: 0,
  },
  {
    name: "Massive Hoard",
    weight: 1,
    mod: 6,
    dice: 4,
    noDice: 3,
    diceMod: 0,
  },
  {
    name: "Gargantuan Hoard",
    weight: 1,
    mod: 8,
    dice: 4,
    noDice: 4,
    diceMod: 0,
  },
];
