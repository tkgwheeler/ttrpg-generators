import Label from "../../Common/Label/Label";
import React from "react";

const Population = props => {
  const { region } = props;

  if (!region) {
    return <div></div>;
  }

  const { population } = region[0];

  console.log(population);
  return (
    <div>
      <h1>Population</h1>
      <Label text="Population" />
      <p>{population.population}</p>
      <Label text="Cultivated land" />
      <p>
        {population.arableArea} sq. miles
        <span>{` ${population.arablePercent}% of the region`}</span>
      </p>
    </div>
  );
};

export default Population;
