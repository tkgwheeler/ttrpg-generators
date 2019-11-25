import React, { useEffect } from "react";
import { randomIntInRange, weightedRandomBag } from "../../../utils/utils";

import Label from "../../Common/Label/Label";

const Geography = props => {
  useEffect(() => {
    generateElevation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const elevationLow = props.elevation[0];
  const elevationHigh = props.elevation[1];

  const generateElevation = () => {
    let elevationList = [];
    let elevationOne =
      randomIntInRange(1, 4) === 1
        ? elevationLevels[0]
        : weightedRandomBag(elevationLevels);
    let elevationTwo = weightedRandomBag(elevationLevels);

    elevationList.push(elevationOne, elevationTwo);
    elevationList.sort((a, b) => {
      return a.low - b.low;
    });

    props.changeElevation(elevationList);
  };

  return (
    <div>
      <h1>Geography</h1>
      <Label text="Elevation" />
      {elevationLow && elevationHigh && (
        <p>
          {elevationLow.low} - {elevationHigh.high} meters
        </p>
      )}
    </div>
  );
};

export default Geography;

const elevationLevels = [
  {
    name: "0-50m",
    low: 0,
    high: 50,
    weight: 3,
  },
  {
    name: "50-200m",
    low: 50,
    high: 200,
    weight: 3,
  },
  {
    name: "200-400m",
    low: 200,
    high: 400,
    weight: 3,
  },
  {
    name: "400-800m",
    low: 400,
    high: 800,
    weight: 3,
  },
  {
    name: "800-1000m",
    low: 800,
    high: 1000,
    weight: 2,
  },
  {
    name: "1000-1400m",
    low: 1000,
    high: 1400,
    weight: 1,
  },
];
