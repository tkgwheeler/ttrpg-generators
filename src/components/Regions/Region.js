import { randomIntInRange, weightedRandomBag } from "../../utils/utils";

import React from "react";

const Region = props => {
  let area = randomIntInRange(1000, 10000);
  let population = area * 20;
  let arableArea = Math.floor(population / 180);
  let arablePercent = Math.floor((arableArea / area) * 100);
  let wildArea = Math.floor(area - arableArea);
  let wildPercent = Math.floor((wildArea / area) * 100);
  // let elevationProfile = randomIntInRange(0, elevationProfiles.length - 1);
  // let dominantTerrainPercent = randomIntInRange(
  //   elevationProfiles[elevationProfile].dominantTerrain[0],
  //   elevationProfiles[elevationProfile].dominantTerrain[1]
  // );
  let highlandsArea = randomIntInRange(0, 100);
  let basePerceipitation = percipitationProfiles[2].name;
  let baseTemperature = temperatureProfiles[2].name;
  let elevationProfile;
  let elevationLevel;
  let areMountains;
  let isCoastal;
  let localPercipitation;

  const mountainsAndCoast = area => {
    elevationProfile = elevationProfiles.find(
      profile => profile.highlands <= area
    );
    areMountains = randomIntInRange(1, 100) <= elevationProfile.mountainChance;
    isCoastal = randomIntInRange(1, 100) <= elevationProfile.coastChance;
  };

  const setBasePercipitation = () => {
    // basePerceipitation = weightedRandomBag(percipitationLevels);
    let baseIndex = percipitationProfiles.findIndex(
      item => item.name === basePerceipitation
    );
    let adjustedIndex = randomIntInRange(-2, 2) + baseIndex;
    localPercipitation = percipitationProfiles[adjustedIndex]
      ? percipitationProfiles[adjustedIndex]
      : percipitationProfiles[baseIndex];
  };
  mountainsAndCoast(highlandsArea);
  setBasePercipitation();

  const setElevation = () => {
    let newIndex = elevationProfiles.find(item => item === elevationProfile);
    elevationLevel = areMountains ? newIndex.level + 1 : newIndex.level;
  };
  setElevation();

  return (
    <div>
      <h1>Region</h1>
      <p>Area: {area} sq. miles</p>
      <p>Population: {population}</p>
      <p>
        Cultivated land: {arableArea} sq.miles {arablePercent}%
      </p>
      <p>
        Wild lands: {wildArea} sq.miles {wildPercent}%
      </p>
      <p>Elevation profile: {elevationProfile.name}</p>
      <p>Elevation Level: {elevationLevel}</p>
      <p>Mountains: {`${areMountains}`}</p>
      <p>Coastal: {`${isCoastal}`}</p>
      <p>Base Percipitation level: {basePerceipitation}</p>
      <p>Local Percipitation Level: {localPercipitation.name}</p>
      <p>Base temperature Level: {baseTemperature}</p>
    </div>
  );
};

export default Region;

const elevationProfiles = [
  {
    name: "mostly Highlands",
    highlands: 80,
    mountainChance: 80,
    coastChance: 0,
    level: 5,
  },
  {
    name: "somewhat Highlands",
    highlands: 60,
    mountainChance: 50,
    coastChance: 10,
    level: 4,
  },
  {
    name: "mixed",
    highlands: 40,
    mountainChance: 25,
    coastChance: 25,
    level: 3,
  },
  {
    name: "somewhat Lowlands",
    highlands: 20,
    mountainChance: 10,
    coastChance: 50,
    level: 2,
  },
  {
    name: "mostly Lowlands",
    highlands: 0,
    mountainChance: 0,
    coastChance: 80,
    level: 1,
  },
];

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
  },
  {
    name: "cold",
  },
  {
    name: "Mild",
  },
  {
    name: "Warm",
  },
  {
    name: "Hot",
  },
  {
    name: "Very hot",
  },
];
