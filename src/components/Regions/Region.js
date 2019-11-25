import { randomIntInRange, weightedRandomBag } from "../../utils/utils";

import Label from "../Common/Label/Label";
import React from "react";

const Region = props => {
  let area = randomIntInRange(1000, 10000);
  let population = area * 20;
  let arableArea = Math.floor(population / 180);
  let arablePercent = Math.floor((arableArea / area) * 100);
  let wildArea = Math.floor(area - arableArea);
  let wildPercent = Math.floor((wildArea / area) * 100);
  let basePerceipitation = percipitationProfiles[2].name;
  let baseTemperature = temperatureProfiles[2].name;
  let localTemperature;
  let isMountains;
  let isCoastal;
  let isHilly;
  let localPercipitation;
  let elevationLow;
  let elevationHigh;

  const terrainFeatures = (elevationLow, elevationHigh) => {
    isCoastal = elevationLow.low === 0;
    isHilly = elevationHigh.low - elevationLow.low >= 400;
    isMountains = elevationHigh.low >= 800;
  };

  const setPercipitation = () => {
    let windEffect = randomIntInRange(-1, 1);
    let adjustments = 0;
    if (isMountains) {
      adjustments += windEffect;
    }
    if (isCoastal) {
      adjustments += windEffect;
    }

    let baseIndex = percipitationProfiles.findIndex(
      item => item.name === basePerceipitation
    );
    let adjustedIndex = baseIndex + adjustments;

    if (adjustedIndex < 0) {
      adjustedIndex = 0;
    } else if (adjustedIndex > percipitationProfiles.length - 1) {
      adjustedIndex = percipitationProfiles.length - 1;
    }
    localPercipitation = percipitationProfiles[adjustedIndex];
  };

  const setTemperature = () => {
    let baseIndex = temperatureProfiles.findIndex(
      item => item.name === baseTemperature
    );
    let adjustedIndex = randomIntInRange(-1, 1) + baseIndex;

    if (adjustedIndex < 0) {
      adjustedIndex = 0;
    } else if (adjustedIndex > temperatureProfiles.length - 1) {
      adjustedIndex = temperatureProfiles.length - 1;
    }
    localTemperature =
      temperatureProfiles[adjustedIndex - adjustTemperatureByElevation()];
  };

  const adjustTemperatureByElevation = () => {
    let temperatureAdjustment = Math.floor(elevationLow.low / 1000);
    return temperatureAdjustment;
  };

  const setElevation = () => {
    let elevationlist = [];
    let elevationOne =
      randomIntInRange(1, 4) === 1
        ? elevationLevels[0]
        : weightedRandomBag(elevationLevels);
    let elevationTwo = weightedRandomBag(elevationLevels);

    elevationlist.push(elevationOne, elevationTwo);
    elevationlist.sort((a, b) => {
      return a.low - b.low;
    });

    elevationLow = elevationlist[0];
    elevationHigh = elevationlist[1];
  };

  const determineBiome = () => {
    let biomeCheck = `${localTemperature.name} ${localPercipitation.name}`;
    console.log(biomeCheck);
    let result;
    switch (biomeCheck) {
      case "Very cold Super-arid":
      case "Very cold Per-arid":
      case "Very cold Arid":
      case "Very cold Seim-arid":
      case "Very cold Sub-humid":
      case "Very cold Humid":
      case "Very cold Per-humid":
      case "Very cold Super-humid":
        result = "Tundra";
        break;
      case "Cold Super-arid":
        result = "Cold Desert";
        break;
      case "Cold Per-arid":
        result = "Montane Grasslands";
        break;
      case "Cold Arid":
      case "Cold Semi-arid":
      case "Cold Sub-humid":
      case "Cold Humid":
      case "Cold Per-humid":
      case "Cold Super-humid":
        result = "Taiga";
        break;
    }
    console.log(result);
  };

  setElevation();
  terrainFeatures(elevationLow, elevationHigh);
  setTemperature();
  setPercipitation();
  determineBiome();

  return (
    <div>
      <h1>Region</h1>
      <h2>Geography</h2>
      <Label text="Area" />
      <p>{area} sq. miles</p>
      <Label text="Elevation" />
      <p>
        {elevationLow.low} - {elevationHigh.high} meters
      </p>
      <Label text="Features" />
      {isCoastal && <p>Coastal</p>}
      {isHilly && <p>Hilly</p>}
      {isMountains && <p>Mountainous</p>}
      {elevationLow.low < 400 ? <p>Lowlands</p> : <p>Highlands</p>}
      <h2>Climate</h2>
      <p>Percipitation: {localPercipitation.name}</p>
      <p>Temperature: {localTemperature.name}</p>
      <h2>Settlement</h2>
      <p>Population: {population}</p>
      <p>
        Cultivated land: {arableArea} sq.miles {arablePercent}%
      </p>
      <p>
        Wild lands: {wildArea} sq.miles {wildPercent}%
      </p>
    </div>
  );
};

export default Region;

const percipitationProfiles = [
  {
    name: "Super-humid",
    weight: 1,
    level: 8,
  },
  {
    name: "Per-humid",
    weight: 2,
    level: 7,
  },
  {
    name: "Humid",
    weight: 3,
    level: 6,
  },
  {
    name: "Sub-humid",
    weight: 3,
    level: 5,
  },
  {
    name: "Seim-arid",
    weight: 3,
    level: 4,
  },
  {
    name: "Arid",
    weight: 3,
    level: 3,
  },
  {
    name: "Per-arid",
    weight: 2,
    level: 2,
  },
  {
    name: "Super-arid",
    weight: 1,
    level: 1,
  },
];

const temperatureProfiles = [
  {
    name: "Very cold",
    avgTemp: -10,
    level: 1,
  },
  {
    name: "Cold",
    avgTemp: 0,
    level: 2,
  },
  {
    name: "Mild",
    avgTemp: 10,
    level: 3,
  },
  {
    name: "Warm",
    avgTemp: 15,
    level: 4,
  },
  {
    name: "Hot",
    avgTemp: 20,
    level: 5,
  },
  {
    name: "Very hot",
    avgTemp: 30,
    level: 6,
  },
];

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
