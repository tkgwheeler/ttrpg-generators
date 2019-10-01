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
  const [value, setValue] = useState(10);

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

  const handleClick = () => {
    setTreasure(createTreasureList());
  };

  const handleAmountChange = event => {
    setNumberOfItems(event.target.value);
  };

  // Create a list of item types and values
  const createTreasureList = () => {
    let treasureList = [];
    let remainder = value;

    // Distribute the value across the number of items
    const distributeValue = (value, item) => {
      let maxV = value - (numberOfItems - (item + 1));
      let itemValue = Math.ceil(Math.random() * maxV);
      remainder -= itemValue;
      return itemValue;
    };

    // Iterate to create each item, the last item recieves the full remaining value
    for (let i = 0; i < numberOfItems; i++) {
      let treasureType;
      if (i === numberOfItems - 1) {
        treasureType = {
          type: weightedRandomBag(treasureTypes),
          value: remainder,
        };
      } else {
        treasureType = {
          type: weightedRandomBag(treasureTypes),
          value: distributeValue(remainder, i),
        };
      }
      treasureList.push(treasureType);
    }
    return treasureList;
  };

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
      />
    </div>
  );
};

export default Treasure;
