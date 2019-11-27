import Label from "../../Common/Label/Label";
import React from "react";

const Climate = props => {
  const { region } = props;

  if (!region) {
    return <div></div>;
  }

  const { percipitation, temperature, biome } = region[0];

  return (
    <div>
      <Label text="Percipitation" />
      <p>{percipitation.name}</p>
      <Label text="Temperature" />
      <p>{temperature.name}</p>
      <Label text="Biome" />
      <p>{biome.name}</p>
    </div>
  );
};

export default Climate;
