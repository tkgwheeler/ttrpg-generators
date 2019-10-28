import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import Dropdown from "../Common/Dropdown/Dropdown";
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

  const weightedRandomBag = list => {
    let items = [];
    let accumulatedWeight = 0;
    let randomWeight;
    let foundItem;

    list.forEach(x => {
      accumulatedWeight += x.weight;
      items.push({ name: x.name, weight: accumulatedWeight });
    });

    randomWeight = Math.random() * accumulatedWeight;
    foundItem = items.find(entry => entry.weight >= randomWeight);
    return foundItem.name;
  };

  const randomIntInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const randomiseTreasure = () => {
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

  const rollHoardSize = (mod, dice, noDice, diceMod) => {
    let rollResult = mod;
    for (let i = 0; i < noDice; i++) {
      rollResult += randomIntInRange(1, dice) + diceMod;
    }
    return rollResult;
  };

  const getHoardSize = () => {
    let hoard = weightedRandomBag(hoardSizeList);
    console.log(hoard);
    let arrIdx = hoardSizeList.findIndex(i => {
      return i.name === hoard;
    });
    let { mod, dice, noDice, diceMod } = hoardSizeList[arrIdx];
    let hoardSize = rollHoardSize(mod, dice, noDice, diceMod);
    console.log(hoardSize);
    return hoardSize;
  };

  const toggleGoldRange = item => {
    let itemGoldRange = goldRangeList.find(element => element.id === item.id)
      .goldRange;
    setGoldRange(itemGoldRange);
  };

  return (
    <div>
      <Dropdown
        title="Gold Range"
        list={goldRangeList}
        toggleItem={toggleGoldRange}
        default={1}
      />
      <Dropdown title="CR rating" list={challengeRatingList} default={1} />
      <TreasureHeader handleClick={randomiseTreasure} />
      <TreasureList
        weightedRandomBag={weightedRandomBag}
        treasureList={treasure}
        value={value}
      />
    </div>
  );
};

export default Treasure;

const hoardSizeList = [
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

const goldRangeList = [
  {
    id: 1,
    title: "Low",
    goldRange: [100, 300],
  },
  {
    id: 2,
    title: "Medium",
    goldRange: [400, 600],
  },
  {
    id: 3,
    title: "High",
    goldRange: [800, 1200],
  },
];

const challengeRatingList = [
  {
    id: 1,
    title: "0-4",
    multiplier: 1,
  },
  {
    id: 2,
    title: "5-10",
    multiplier: 1,
  },
  {
    id: 3,
    title: "11-16",
    multiplier: 1,
  },
  {
    id: 4,
    title: "17+",
    multiplier: 1,
  },
];
