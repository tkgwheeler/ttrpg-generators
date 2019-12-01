import React, { useEffect, useState } from "react";
import { randomIntInRange, weightedRandomBag } from "../../utils/utils";

import Areas from "../Regions/Areas/Areas";
import Card from "../Common/Card/Card";
import Climate from "./Climate/Climate";
import Geography from "./Geography/Geography";
import Population from "./Population/Population";
import Summary from "./Summary/Summary";

const Region = () => {
  const [regionData, setRegionData] = useState([]);

  const basePerceipitation = percipitationProfiles[5];
  const baseTemperature = temperatureProfiles[2];

  const createRegion = () => {
    let region = [];
    const elevation = determineElevation();
    const terrain = terrainFeatures(elevation[0], elevation[1]);
    const temperature = setTemperature(elevation[0].low);
    const percipitation = setPercipitation(
      terrain.isCoastal,
      terrain.isMountains
    );
    const isWetlands = setWetlands(temperature, percipitation, terrain);
    const biome = setBiome(temperature, percipitation);
    const population = setPopulation(biome, terrain, isWetlands);
    const weirdLevel =
      randomIntInRange(1, 5) - Math.round(population.populationDensity / 20);

    terrain.isWetlands = isWetlands;

    let regionObject = {
      elevation: {
        low: elevation[0],
        high: elevation[1],
      },
      features: terrain,
      temperature: temperature,
      percipitation: percipitation,
      biome: biome,
      population: population,
      wetlands: isWetlands,
      weirdLevel: weirdLevel,
    };

    region.push(regionObject);

    setRegionData(region);
  };

  const determineElevation = () => {
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
    return elevationList;
  };

  const terrainFeatures = (elevationLow, elevationHigh) => {
    let isCoastal = elevationLow.low === 0;
    let isHilly = elevationHigh.low - elevationLow.low >= 400;
    let isMountains = elevationHigh.low >= 800;

    let terrain = {
      isCoastal: isCoastal,
      isHilly: isHilly,
      isMountains: isMountains,
    };

    return terrain;
  };

  const setTemperature = elevationLow => {
    const indexOfBaseTemp = temperatureProfiles.findIndex(
      item => item === baseTemperature
    );

    const randomVariation = randomIntInRange(-1, 1);
    const elevationAdjustment = Math.floor(elevationLow / 1000);

    let adjustedIndex = randomVariation + elevationAdjustment + indexOfBaseTemp;

    if (adjustedIndex < 0) {
      adjustedIndex = 0;
    } else if (adjustedIndex > temperatureProfiles.length - 1) {
      adjustedIndex = temperatureProfiles.length - 1;
    }

    return temperatureProfiles[adjustedIndex];
  };

  const setPercipitation = (isCoastal, isMountains) => {
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

    return percipitationProfiles[adjustedIndex];
  };

  const setBiome = (temperature, percipitation) => {
    const tempIdx = temperatureProfiles.findIndex(item => item === temperature);
    const percipIdx = percipitationProfiles.findIndex(
      item => item === percipitation
    );
    let biome = biomeMap[tempIdx][percipIdx];
    return biomeProfiles.find(element => element.name === biome);
  };

  const setPopulation = (biome, terrain, isWetlands) => {
    const totalArea = randomIntInRange(1000, 10000);
    const biomeHabitability = biome.habitability;
    const populationBase = 20;
    let populationModifier = 1;

    if (terrain.isCoastal) {
      populationModifier = populationModifier + 0.5;
    }
    if (terrain.isMountains) {
      populationModifier = populationModifier - 0.25;
    }
    if (isWetlands) {
      populationModifier = populationModifier - 0.25;
    }

    const populationDensity =
      populationBase * populationModifier * biomeHabitability;
    const population = totalArea * populationDensity;
    const arableArea = Math.floor(population / 180);
    const arablePercent = Math.floor((arableArea / totalArea) * 100);
    const wildArea = Math.floor(totalArea - arableArea);
    const wildPercent = Math.floor((wildArea / totalArea) * 100);
    const populationObject = {
      totalArea,
      habitability: biomeHabitability,
      populationDensity,
      population,
      arableArea,
      arablePercent,
      wildArea,
      wildPercent,
    };

    return populationObject;
  };

  const setWetlands = (temperature, percipitation, terrain) => {
    const temp = temperature.level;
    const rain = percipitation.level;
    const isCoastal = terrain.isCoastal;

    const tempEffect = (6 - temp) * 3;
    const rainEffect = rain / 1.7;
    const coastalEffect = isCoastal ? 1.15 : 1;

    const initialWetlandsChance = 5;
    let wetlandsChance =
      (initialWetlandsChance + tempEffect) * rainEffect * coastalEffect;

    let wetlands = randomIntInRange(1, 100) < wetlandsChance;
    return wetlands;
  };

  useEffect(() => {
    createRegion();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (regionData.length === 0) {
    return <div></div>;
  }

  return (
    <div>
      <Card>
        <Summary region={regionData.length > 0 ? regionData : undefined} />
        <Population region={regionData.length > 0 ? regionData : undefined} />
      </Card>
    </div>
  );
};

export default Region;

{
  /* <Areas region={regionData.length > 0 ? regionData : undefined} />
<Climate region={regionData.length > 0 ? regionData : undefined} />
<Geography region={regionData.length > 0 ? regionData : undefined} /> */
}

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
