import React, { useState } from "react";
import { graphql, useStaticQuery } from "gatsby";

import TreasureHeader from "./TreasureHeader/TresureHeader";
import TreasureList from "./TreasureList/TreasureList";

// To Do
// Convert Art to JSON and query
// Rename treasure.json to treasureType.json
// Look at Generating coin amounts - Idea to random gen number upto a max then remove from Max upto Coin items number of times

const Treasure = () => {
  const [treasure, setTreasure] = useState([]);
  const [amount, setAmount] = useState(3);
  const [newAmount, setNewAmount] = useState(3);

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
      <TreasureHeader
        handleClick={handleClick}
        inputValue={newAmount}
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
