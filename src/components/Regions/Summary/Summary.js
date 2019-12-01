import React from "react";
import SummaryItem from "./SummaryItem";
import TerrainFeatures from "../TerrainFeatures/TerrainFeatures";
import coastIcon from "../../../images/coast_icon.png";
import hillsIcon from "../../../images/TrialIcon.png";
import mountainIcon from "../../../images/mountain_icon.png";
import wetlandsIcon from "../../../images/wetlands_icon.png";

const Summary = props => {
  const { region } = props;

  if (!region) {
    return <div></div>;
  }

  console.log(region[0]);
  const { features, population, percipitation, temperature, biome } = region[0];

  const tempBiomeTag = (
    <div
      style={{
        backgroundColor: "#B1CBC9",
        display: "inline-block",
        padding: "4px 12px",
        borderRadius: "4px",
        color: "#00574E",
      }}
    >
      <span>{biome.name}</span>
    </div>
  );

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ margin: 0 }}>Chalkwood Downs</h1>
        <div style={{ lineHeight: 0 }}>
          {features.isCoastal && <img src={coastIcon} style={{ margin: 0 }} />}
          {features.isHilly && <img src={hillsIcon} style={{ margin: 0 }} />}
          {features.isMountains && (
            <img src={mountainIcon} style={{ margin: 0 }} />
          )}
          {features.isWetlands && (
            <img src={wetlandsIcon} style={{ margin: 0 }} />
          )}
        </div>
      </div>

      <TerrainFeatures features={features} />
      <SummaryItem
        label="Area"
        content={population.totalArea.toLocaleString()}
        suffix="miles²"
      />
      <SummaryItem
        label="Population"
        content={population.population.toLocaleString()}
      />
      <SummaryItem label="Biome" content={tempBiomeTag} />
      <hr style={{ margin: "48px 0px" }} />
    </div>
  );
};

export default Summary;
