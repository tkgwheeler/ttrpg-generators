import React, { useEffect, useState } from "react";
import {
  diceRoller,
  randomIntInRange,
  weightedRandomBag,
} from "../../../utils/utils";

import Label from "../../Common/Label/Label";
import Settlement from "../Settlements/Settlement";

const Population = props => {
  const [settlements, setSettlements] = useState([]);
  const { region } = props;
  const { population } = region[0];

  const generateSettlements = population => {
    const urbanisationRate = 0.15;
    let urbanisedPopulation = population * urbanisationRate;

    const largestSettlement =
      Math.round(Math.sqrt(population)) * diceRoller(2, 4, 10);
    let lastSettlement = largestSettlement;
    const cutOffPoint = 500;
    let settlements = [largestSettlement];

    while (lastSettlement > cutOffPoint) {
      let nextSettlement = (lastSettlement * (diceRoller(2, 4, 0) * 10)) / 100;
      settlements.push(Math.round(nextSettlement));
      lastSettlement = nextSettlement;
    }
    console.log(settlements);
    setSettlements(settlements);
  };

  useEffect(() => {
    generateSettlements(population.population);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!region) {
    return <div></div>;
  }

  const settlementsList = settlements.map((item, index) => {
    return <Settlement population={item} />;
  });

  return (
    <div>
      <h1>Settlements</h1>
      <Label text="Population" />
      <p>{population.population}</p>
      <Label text="Cultivated land" />
      <p>
        {population.arableArea} sq. miles
        <span>{` ${population.arablePercent}% of the region`}</span>
      </p>
      <p>{population.populationDensity}</p>
      <p>
        {settlements.length > 0 &&
          settlements.reduce((total, value) => {
            return total + value;
          })}{" "}
        people live in the region's {settlements.length} towns
      </p>
      {settlementsList}
    </div>
  );
};

export default Population;
