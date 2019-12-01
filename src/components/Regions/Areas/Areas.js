import React, { useEffect, useState } from "react";
import { randomIntInRange, weightedRandomBag } from "../../../utils/utils";

import Area from "./Area/Area";

const Areas = props => {
  const region = props.region;

  if (!region) {
    return <div></div>;
  }

  const { features, population, biome } = region[0];
  let areaList = [];

  const createAreasList = () => {
    const numberOfAreas = randomIntInRange(1, 4);
    for (let i = 1; i <= numberOfAreas; i++) {
      let area = {
        type: setAreaType(),
      };
      areaList.push(area);
    }
  };

  const setAreaType = () => {
    let types = [];
    features.isCoastal && types.push("Coast");
    features.isHilly && types.push("Hills");
    features.isMountains && types.push("Mountains");
    features.isWetlands && types.push("Wetlands");
    types.push(biome.name);
    const randomInt = randomIntInRange(1, types.length) - 1;
    return types[randomInt];
  };

  createAreasList();

  const listItems = areaList.map((item, index) => {
    return (
      <div key={index}>
        <Area area={item} biome={biome} />
      </div>
    );
  });

  return <div>{listItems}</div>;
};

export default Areas;
