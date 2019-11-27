import React from "react";

const Summary = props => {
  const { region } = props;

  if (!region) {
    return <div></div>;
  }

  console.log(region[0]);
  const { features, population, percipitation, temperature, biome } = region[0];

  return (
    <div style={{ marginBottom: 128 }}>
      <div style={{ marginBottom: 24 }}>
        <span style={{ fontSize: 22, fontWeight: 600, marginRight: 8 }}>
          Area:
        </span>
        <span style={{ fontSize: 22 }}>{population.totalArea} miles²</span>
      </div>
      <div>
        <span style={{ fontSize: 22, fontWeight: 600, marginRight: 8 }}>
          population:
        </span>
        <span style={{ fontSize: 22 }}>{population.population}</span>
      </div>
    </div>
  );
};

export default Summary;
