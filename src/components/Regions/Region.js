import React, { useState } from "react";
import { randomIntInRange, weightedRandomBag } from "../../utils/utils";

import Geography from "./Geography/Geography";
import Label from "../Common/Label/Label";

const Region = props => {
  const [elevation, setElevation] = useState([]);

  let area = randomIntInRange(1000, 10000);
  let population = area * 20;
  let arableArea = Math.floor(population / 180);
  let arablePercent = Math.floor((arableArea / area) * 100);
  let wildArea = Math.floor(area - arableArea);
  let wildPercent = Math.floor((wildArea / area) * 100);
  let basePerceipitation = percipitationProfiles[5];
  let baseTemperature = temperatureProfiles[2];
  let localTemperature;
  let isMountains;
  let isCoastal;
  let isHilly;
  let localPercipitation;
  let elevationLow;
  let elevationHigh;
  let biome;

  const changeElevation = elevations => {
    setElevation(elevations);
  };

  const terrainFeatures = (elevationLow, elevationHigh) => {
    isCoastal = elevationLow.low === 0;
    isHilly = elevationHigh.low - elevationLow.low >= 400;
    isMountains = elevationHigh.low >= 800;
  };

  const setPercipitation = () => {
    const IndexOfBasePercipitation = percipitationProfiles.findIndex(
      item => item === basePerceipitation
    );

    const windVariation = randomIntInRange(-1, 1);

    let windAdjustments = 0;
    if (isMountains) {
      windAdjustments += windVariation;
    }
    if (isCoastal) {
      windAdjustments += windVariation;
    }
    let adjustedIndex = IndexOfBasePercipitation + windAdjustments;

    if (adjustedIndex < 0) {
      adjustedIndex = 0;
    } else if (adjustedIndex > percipitationProfiles.length - 1) {
      adjustedIndex = percipitationProfiles.length - 1;
    }
    localPercipitation = percipitationProfiles[adjustedIndex];
  };

  const setTemperature = () => {
    const indexOfBaseTemp = temperatureProfiles.findIndex(
      item => item === baseTemperature
    );

    const tempVariation = randomIntInRange(-1, 1);

    let adjustedIndex = tempVariation + indexOfBaseTemp;

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

  const determineElevation = () => {
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
    const tempIdx = temperatureProfiles.findIndex(
      item => item === localTemperature
    );
    const percipIdx = percipitationProfiles.findIndex(
      item => item === localPercipitation
    );
    biome = biomeMap[tempIdx][percipIdx];
    console.log(biomeProfiles.find(element => element.name === biome));
  };

  determineElevation();
  terrainFeatures(elevationLow, elevationHigh);
  setTemperature();
  setPercipitation();
  determineBiome();

  console.log(elevation);

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
      <p>Biome: {biome}</p>
      <h2>Settlement</h2>
      <p>Population: {population}</p>
      <p>
        Cultivated land: {arableArea} sq.miles {arablePercent}%
      </p>
      <p>
        Wild lands: {wildArea} sq.miles {wildPercent}%
      </p>
      <Geography changeElevation={changeElevation} elevation={elevation} />
    </div>
  );
};

export default Region;

const percipitationProfiles = [
  {
    name: "Super-arid",
    weight: 1,
    level: 1,
  },
  {
    name: "Per-arid",
    weight: 2,
    level: 2,
  },
  {
    name: "Arid",
    weight: 3,
    level: 3,
  },
  {
    name: "Seim-arid",
    weight: 3,
    level: 4,
  },
  {
    name: "Sub-humid",
    weight: 3,
    level: 5,
  },
  {
    name: "Humid",
    weight: 3,
    level: 6,
  },
  {
    name: "Per-humid",
    weight: 2,
    level: 7,
  },
  {
    name: "Super-humid",
    weight: 1,
    level: 8,
  },
];

const temperatureProfiles = [
  {
    name: "Very cold",
    avgTemp: -10,
    level: 1,
    maxPercipitationLvl: 3,
  },
  {
    name: "Cold",
    avgTemp: 0,
    level: 2,
    maxPercipitationLvl: 6,
  },
  {
    name: "Mild",
    avgTemp: 10,
    level: 3,
    maxPercipitationLvl: 6,
  },
  {
    name: "Warm",
    avgTemp: 15,
    level: 4,
    maxPercipitationLvl: 7,
  },
  {
    name: "Hot",
    avgTemp: 20,
    level: 5,
    maxPercipitationLvl: 8,
  },
  {
    name: "Very hot",
    avgTemp: 30,
    level: 6,
    maxPercipitationLvl: 8,
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

const biomeMap = [
  [
    "Tundra",
    "Tundra",
    "Tundra",
    "Tundra",
    "Tundra",
    "Tundra",
    "Tundra",
    "Tundra",
  ],
  [
    "Cold Desert",
    "Montane Grasslands",
    "Montane Grasslands",
    "Taiga",
    "Taiga",
    "Taiga",
    "Taiga",
    "Taiga",
  ],
  [
    "Cold Desert",
    "Temperate Grasslands",
    "Temperate Grasslands",
    "Temperate Deciduous Forest",
    "Temperate Deciduous Forest",
    "Temperate Rainforest",
    "Temperate Rainforest",
    "Temperate Rainforest",
  ],
  [
    "Cold Desert",
    "Chapparal",
    "Chapparal",
    "Temperate Deciduous Forest",
    "Temperate Deciduous Forest",
    "Temperate Rainforest",
    "Temperate Rainforest",
    "Temperate Rainforest",
  ],
  [
    "Hot Desert",
    "Tropical Shrublands",
    "Tropical Savannas",
    "Tropical Savannas",
    "Tropical Seasonal Forest",
    "Tropical Seasonal Forest",
    "Tropical Rainforest",
    "Tropical Rainforest",
  ],
  [
    "Hot Desert",
    "Hot Desert",
    "Tropical Savannas",
    "Tropical Savannas",
    "Tropical Seasonal Forest",
    "Tropical Seasonal Forest",
    "Tropical Rainforest",
    "Tropical Rainforest",
  ],
];

const biomeProfiles = [
  {
    name: "Tundra",
    habitability: 0.02,
  },
  {
    name: "Cold Desert",
    habitability: 0.05,
  },
  {
    name: "Montane Grasslands",
    habitability: 0.1,
  },
  {
    name: "Taiga",
    habitability: 0.15,
  },
  {
    name: "Temperate Grasslands",
    habitability: 0.5,
  },
  {
    name: "Temperate Deciduous Forest",
    habitability: 1,
  },
  {
    name: "Temperate Rainforest",
    habitability: 0.8,
  },
  {
    name: "Chapparal",
    habitability: 0.15,
  },
  {
    name: "Hot Desert",
    habitability: 0.02,
  },
  {
    name: "Tropical Shrublands",
    habitability: 0.1,
  },
  {
    name: "Tropical Savannas",
    habitability: 0.2,
  },
  {
    name: "Tropical Seasonal Forest",
    habitability: 0.5,
  },
  {
    name: "Tropical Rainforest",
    habitability: 0.9,
  },
];
