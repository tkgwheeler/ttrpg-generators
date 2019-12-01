import React, { useEffect, useState } from "react";
import { randomIntInRange, weightedRandomBag } from "../../../../utils/utils";

const Area = props => {
  const { area, biome } = props;
  let terrain;

  switch (area.type) {
    case "Mountains":
      terrain = mountains[randomIntInRange(0, mountains.length - 1)];
      break;
    case "Hills":
      terrain = hills[randomIntInRange(0, hills.length - 1)];
      break;
    case "Coast":
      terrain = coast[randomIntInRange(0, coast.length - 1)];
      break;
    case "Wetlands":
      terrain = wetlands[randomIntInRange(0, wetlands.length - 1)];
      break;
    case "Taiga":
    case "Temperate Rainforest":
    case "Temperate Deciduous Forest":
    case "Montane Grasslands":
      terrain = taiga[randomIntInRange(0, taiga.length - 1)];
      break;
    default:
      terrain = "default";
  }

  return (
    <div>
      <h3>{`${
        adjectives[randomIntInRange(0, adjectives.length - 1)]
      } ${terrain}`}</h3>
    </div>
  );
};

export default Area;

const mountains = [
  "Mountains",
  "Peaks",
  "Bluffs",
  "Range",
  "Valley",
  "Slopes",
  "Heights",
  "Cliffs",
  "Pass",
  "Summit",
];
const hills = [
  "Hills",
  "Highlands",
  "Valley",
  "Heights",
  "Mounds",
  "Foothills",
  "Range",
  "Pass",
  "Crags",
  "Bluffs",
  "Moors",
  "Heath",
  "Gorge",
  "Reaches",
];
const coast = [
  "Bay",
  "Dunes",
  "Beaches",
  "Cape",
  "Peninsula",
  "Shores",
  "Cove",
  "Fjord",
  "Gulf",
  "Sands",
];
const wetlands = ["Swamp", "Marshes", "Bog", "Floods"];
const forests = ["Forest", "Fells", "Groves", "Woods", "Woodlands", "Wilds"];
const taiga = [
  "Forest",
  "Fells",
  "Grove",
  "Woods",
  "Woodlands",
  "Wilds",
  "Thickets",
  "Downs",
  "Expanse",
  "Flats",
  "Stream",
  "Gully",
];
const adjectives = [
  "Black",
  "Broken",
  "Blighted",
  "Blessed",
  "Burning",
  "Far",
  "Forgotten",
  "Shifting",
  "Silver",
  "Golden",
  "White",
  "Shining",
  "Dazzling",
  "Glimmering",
  "Lost",
  "Buried",
  "Hidden",
  "Bare",
  "Cracked",
  "Cripplied",
  "Shattered",
  "Crooked",
  "Slanted",
  "Majestic",
];
