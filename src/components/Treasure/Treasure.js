import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import TreasureHeader from "./TreasureHeader/TresureHeader";
import TreasureList from "./TreasureList/TreasureList";

// To Do
// Rename treasure.json to treasureType.json
// Look at Generating coin amounts - Idea to random gen number upto a max then remove from Max upto Coin items number of times

const Treasure = () => {
  const [treasure, setTreasure] = useState([]);
  const [value, setValue] = useState(500);
  const [goldRange, setGoldRange] = useState([100, 300]);
  const [challengeRating, setChallengeRating] = useState(1);

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
    let hoardSize = getHoardSize();
    setTreasure(createTreasureList(treasureTypes, hoardSize));
  };

  const createTreasureList = (weightedArr, hoardSize) => {
    let treasureList = [];
    let minValue = goldRange[0];
    let maxValue = goldRange[1];

    for (let i = 0; i < hoardSize; i++) {
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

  const getHoardSize = () => {
    let arrName = weightedRandomBag(hoardSize);
    console.log(arrName);
    let arrIdx = hoardSize.findIndex(i => {
      return i.name === arrName;
    });
    let { mod, dice, noDice, diceMod } = hoardSize[arrIdx];
    let result = hoardSizeRoll(mod, dice, noDice, diceMod);
    console.log(result);
    return result;
  };

  return (
    <div>
      <TreasureHeader handleClick={handleClick} />
      <TreasureList
        weightedRandomBag={weightedRandomBag}
        treasureList={treasure}
        value={value}
      />
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
