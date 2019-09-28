import React, { useState } from "react";

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
    setTreasure(foundItem.name);
  };

  return (
    <div>
      <h1>Treasure</h1>
      <h2>{treasure}</h2>
      <button onClick={() => weightedRandomBag(treasureTypes)}>
        Treasure Type
      </button>
      <button onClick={() => weightedRandomBag(treasureContainer)}>
        Treasure Container
      </button>
      <button onClick={() => weightedRandomBag(treasureHiddenBy)}>
        Treasure Hidden By
      </button>
      <button onClick={() => weightedRandomBag(treasureTrappedBy)}>
        Treasure Trapped By
      </button>
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

const treasureContainer = [
  {
    name: "Bags or Sacks",
    weight: 1,
  },
  {
    name: "Barrels or Cask",
    weight: 1,
  },
  {
    name: "Coffer or Kist",
    weight: 1,
  },
  {
    name: "Chest",
    weight: 1,
  },
  {
    name: "Huge Chest",
    weight: 1,
  },
  {
    name: "Trunk",
    weight: 1,
  },
  {
    name: "Urn",
    weight: 1,
  },
  {
    name: "Jar",
    weight: 1,
  },
  {
    name: "Niche",
    weight: 1,
  },
  {
    name: "Loose",
    weight: 1,
  },
];

const treasureHiddenBy = [
  {
    name: "Concealed",
    weight: 2,
  },
  {
    name: "Invisible",
    weight: 1,
  },
  {
    name: "Secret space under container",
    weight: 1,
  },
  {
    name: "Secret compartment",
    weight: 1,
  },
  {
    name: "Inside an ordinary item in plain view",
    weight: 1,
  },
  {
    name: "Disguised to appear as something else",
    weight: 1,
  },
  {
    name: "Under a heap of trash or dung",
    weight: 1,
  },
  {
    name: "Under a loose stone in the floor or wall",
    weight: 1,
  },
  {
    name: "In a nearby secret or concealed room",
    weight: 1,
  },
];

const treasureTrappedBy = [
  {
    name: "Contact Poison on Treasure",
    weight: 1,
  },
  {
    name: "Contact Poison on Container",
    weight: 1,
  },
  {
    name: "Poisoned needles in lock",
    weight: 2,
  },
  {
    name: "Poisoned needles in handle",
    weight: 3,
  },
  {
    name: "Poisoned spring darts in front",
    weight: 2,
  },
  {
    name: "Poisoned spring darts on top",
    weight: 2,
  },
  {
    name: "Poisoned Spring darts from inside lid",
    weight: 2,
  },
  {
    name: "Poisoned spring darts from inside bottom",
    weight: 2,
  },
  {
    name: "Blade scything across top",
    weight: 1,
  },
  {
    name: "Poisonous vermin (insects, reptiles)",
    weight: 1,
  },
  {
    name: "Poison Gas released",
    weight: 1,
  },
  {
    name: "Trap door opens",
    weight: 1,
  },
  {
    name: "Stone block drops",
    weight: 1,
  },
  {
    name: "Magic",
    weight: 1,
  },
];
